import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { gzipSync } from "node:zlib";

const root = process.cwd();
const nextDir = join(root, ".next");

const limits = {
  totalClientJsGzip: 1.5 * 1024 * 1024,
  singleClientChunkGzip: 300 * 1024,
  singleHtml: 300 * 1024,
};

function walk(directory) {
  if (!existsSync(directory)) return [];

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KiB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MiB`;
}

function fail(message) {
  console.error(`::error::${message}`);
  process.exitCode = 1;
}

if (!existsSync(nextDir)) {
  console.error("::error::.next não existe. Execute o build antes do orçamento de performance.");
  process.exit(1);
}

const clientChunks = walk(join(nextDir, "static", "chunks")).filter(
  (file) => extname(file) === ".js",
);

let totalClientJsGzip = 0;
let largestChunk = { file: "", gzipBytes: 0 };

for (const file of clientChunks) {
  const source = readFileSync(file);
  const gzipBytes = gzipSync(source, { level: 9 }).byteLength;
  totalClientJsGzip += gzipBytes;

  if (gzipBytes > largestChunk.gzipBytes) {
    largestChunk = { file, gzipBytes };
  }

  if (gzipBytes > limits.singleClientChunkGzip) {
    fail(
      `Chunk JS acima do limite: ${relative(root, file)} = ${formatBytes(gzipBytes)} gzip (limite ${formatBytes(limits.singleClientChunkGzip)}).`,
    );
  }
}

if (totalClientJsGzip > limits.totalClientJsGzip) {
  fail(
    `JavaScript cliente total acima do limite: ${formatBytes(totalClientJsGzip)} gzip (limite ${formatBytes(limits.totalClientJsGzip)}).`,
  );
}

const htmlFiles = walk(join(nextDir, "server", "app")).filter(
  (file) => extname(file) === ".html",
);

let largestHtml = { file: "", bytes: 0 };
for (const file of htmlFiles) {
  const bytes = statSync(file).size;
  if (bytes > largestHtml.bytes) largestHtml = { file, bytes };

  if (bytes > limits.singleHtml) {
    fail(
      `HTML estático acima do limite: ${relative(root, file)} = ${formatBytes(bytes)} (limite ${formatBytes(limits.singleHtml)}).`,
    );
  }
}

console.log("Performance budget:");
console.log(`- JS cliente: ${formatBytes(totalClientJsGzip)} gzip em ${clientChunks.length} chunks`);
console.log(
  `- Maior chunk: ${largestChunk.file ? relative(root, largestChunk.file) : "n/a"} (${formatBytes(largestChunk.gzipBytes)})`,
);
console.log(
  `- Maior HTML: ${largestHtml.file ? relative(root, largestHtml.file) : "n/a"} (${formatBytes(largestHtml.bytes)})`,
);

if (process.exitCode) process.exit(process.exitCode);
