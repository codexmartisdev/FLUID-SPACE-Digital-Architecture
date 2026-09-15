import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

const outputDir = path.resolve("visual-report");
fs.mkdirSync(outputDir, { recursive: true });

const chromePath = process.env.CHROME_PATH || "/usr/bin/google-chrome";
const sites = [
  { name: "main", url: "http://127.0.0.1:3001" },
  { name: "branch", url: "http://127.0.0.1:3000" },
];

const views = [
  { name: "inicio", route: "/" },
  { name: "sobre", route: "/sobre" },
  { name: "servicos", route: "/servicos" },
  { name: "projetos", route: "/projetos" },
  { name: "blog", route: "/blog" },
  { name: "contato", route: "/contato" },
  { name: "projeto-casa-horizon", route: "/projetos/casa-horizon" },
  {
    name: "artigo-luz-natural",
    route: "/blog/como-a-luz-natural-transforma-a-experiencia-de-uma-residencia",
  },
];

const desktopViewport = { width: 1440, height: 1000, deviceScaleFactor: 1 };
const mobileViewport = { width: 390, height: 844, deviceScaleFactor: 1 };

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
});

const report = {
  sites: {},
  comparisons: {},
  fatalErrors: [],
  limits: {
    informationalMismatchRatio: 0.01,
    blockingMismatchRatio: 0.08,
  },
};

async function waitForVisualStability(page) {
  await page.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);

  await page.addStyleTag({
    content: `
      html { scroll-behavior: auto !important; }
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        caret-color: transparent !important;
      }
    `,
  });

  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;

    const step = Math.max(window.innerHeight * 0.8, 600);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 40));
    }
    window.scrollTo(0, 0);

    const images = Array.from(document.images);
    await Promise.all(
      images.map((image) => {
        if (image.complete) return Promise.resolve();
        return Promise.race([
          new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
          }),
          new Promise((resolve) => setTimeout(resolve, 2500)),
        ]);
      }),
    );
  });

  await sleep(250);
}

async function captureView(page, site, view, siteReport) {
  const targetUrl = new URL(view.route, site.url).toString();
  await page.goto(targetUrl, { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.waitForFunction(
    () => document.body.innerText.trim().length > 100,
    { timeout: 15000 },
  );
  await waitForVisualStability(page);

  const diagnostics = await page.evaluate(() => ({
    overlay: Boolean(
      document.querySelector(
        "[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay",
      ),
    ),
    textLength: document.body.innerText.trim().length,
    title: document.title,
    theme: document.documentElement.getAttribute("data-theme"),
  }));

  const file = `${site.name}-${view.name}.png`;
  await page.screenshot({ path: path.join(outputDir, file), fullPage: true });
  siteReport.views[view.name] = { ...diagnostics, file, route: view.route };
}

async function captureMobile(page, site, siteReport) {
  await page.setViewport(mobileViewport);
  await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.waitForFunction(
    () => document.body.innerText.trim().length > 100,
    { timeout: 15000 },
  );
  await waitForVisualStability(page);

  const home = `${site.name}-mobile-inicio.png`;
  await page.screenshot({ path: path.join(outputDir, home), fullPage: true });

  await page.click("#mobile-menu-toggle");
  await sleep(120);
  const menu = `${site.name}-mobile-menu.png`;
  await page.screenshot({ path: path.join(outputDir, menu), fullPage: true });

  siteReport.mobile = { home, menu };
}

async function captureSite(site) {
  const siteReport = { consoleErrors: [], views: {}, mobile: {} };
  report.sites[site.name] = siteReport;

  const page = await browser.newPage();
  await page.setViewport(desktopViewport);
  await page.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);

  page.on("console", (msg) => {
    if (msg.type() === "error") siteReport.consoleErrors.push(msg.text());
  });
  page.on("pageerror", (error) => {
    siteReport.consoleErrors.push(`PAGEERROR: ${error.message}`);
  });

  for (const view of views) {
    await page.setViewport(desktopViewport);
    await captureView(page, site, view, siteReport);
  }

  await captureMobile(page, site, siteReport);
  await page.close();
}

for (const site of sites) {
  try {
    await captureSite(site);
  } catch (error) {
    report.fatalErrors.push(`${site.name}: ${error?.stack || error}`);
  }
}

function comparePngs(aFile, bFile, diffFile) {
  const a = PNG.sync.read(fs.readFileSync(path.join(outputDir, aFile)));
  const b = PNG.sync.read(fs.readFileSync(path.join(outputDir, bFile)));

  if (a.width !== b.width || a.height !== b.height) {
    return {
      comparable: false,
      dimensions: { a: [a.width, a.height], b: [b.width, b.height] },
      blocking: true,
    };
  }

  const diff = new PNG({ width: a.width, height: a.height });
  const mismatchedPixels = pixelmatch(
    a.data,
    b.data,
    diff.data,
    a.width,
    a.height,
    { threshold: 0.12 },
  );
  fs.writeFileSync(path.join(outputDir, diffFile), PNG.sync.write(diff));

  const mismatchRatio = mismatchedPixels / (a.width * a.height);
  return {
    comparable: true,
    width: a.width,
    height: a.height,
    mismatchedPixels,
    totalPixels: a.width * a.height,
    mismatchRatio,
    noteworthy: mismatchRatio >= report.limits.informationalMismatchRatio,
    blocking: mismatchRatio >= report.limits.blockingMismatchRatio,
    diffFile,
  };
}

if (report.fatalErrors.length === 0) {
  for (const view of views) {
    report.comparisons[view.name] = comparePngs(
      `main-${view.name}.png`,
      `branch-${view.name}.png`,
      `diff-${view.name}.png`,
    );
  }

  report.comparisons.mobileInicio = comparePngs(
    "main-mobile-inicio.png",
    "branch-mobile-inicio.png",
    "diff-mobile-inicio.png",
  );
  report.comparisons.mobileMenu = comparePngs(
    "main-mobile-menu.png",
    "branch-mobile-menu.png",
    "diff-mobile-menu.png",
  );
}

fs.writeFileSync(
  path.join(outputDir, "report.json"),
  JSON.stringify(report, null, 2),
);
await browser.close();

if (report.fatalErrors.length > 0) {
  console.error(report.fatalErrors.join("\n"));
  process.exit(1);
}

const hasOverlay = Object.values(report.sites).some((site) =>
  Object.values(site.views).some((view) => view.overlay),
);
if (hasOverlay) {
  console.error("Visual regression detected a framework error overlay.");
  process.exit(2);
}

const blockingComparisons = Object.entries(report.comparisons).filter(
  ([, comparison]) => comparison.blocking,
);

console.log(JSON.stringify(report, null, 2));

if (blockingComparisons.length > 0) {
  console.error(
    `Visual regression exceeded the blocking threshold in: ${blockingComparisons
      .map(([name]) => name)
      .join(", ")}`,
  );
  process.exit(3);
}
