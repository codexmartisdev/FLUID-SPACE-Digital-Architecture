export const larTheme = {
  id: "lar",
  label: "LaR",
  brand: "LaR Arquitetura e Interiores",
  status: "active",
  colors: {
    background: {
      site: "#faf9f7",
      mineral: "#f8f8f7",
      cream: "#f4f3f0",
      dark: "#111215",
      surface: "#ffffff",
    },
    text: {
      primary: "#191a1d",
      muted: "#6b6f76",
      onDark: "#ffffff",
    },
    border: {
      subtle: "rgba(0, 0, 0, 0.08)",
    },
    focus: "rgba(25, 26, 29, 0.88)",
  },
  typography: {
    display: "var(--font-sans)",
    body: "var(--font-sans)",
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  radius: {
    small: "0.375rem",
    card: "0.75rem",
    panel: "1.5rem",
    pill: "9999px",
  },
  layout: {
    sectionSpace: "5rem",
    sectionSpaceLarge: "7rem",
    containerMax: "80rem",
    headerOffset: "92px",
  },
  motion: {
    fast: 0.18,
    standard: 0.3,
    slow: 0.7,
    fluidEase: [0.22, 1, 0.36, 1] as const,
  },
  images: {
    saturation: 0.93,
    saturationMobile: 0.9,
    contrast: 1.025,
    contrastMobile: 1.02,
  },
} as const;

export type LarTheme = typeof larTheme;
