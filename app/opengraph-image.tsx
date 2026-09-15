import { ImageResponse } from "next/og";

export const alt = "LaR Arquitetura e Interiores";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f1ed",
          color: "#191a1d",
          padding: "72px 84px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <span>LaR</span>
          <span style={{ opacity: 0.55 }}>Arquitetura · Interiores</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.04,
              fontWeight: 400,
              letterSpacing: "-0.045em",
              maxWidth: 940,
            }}
          >
            Espaços para serem experimentados.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              opacity: 0.62,
            }}
          >
            Parnaíba - PI · Luiz Correia - PI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: 2,
            background: "#191a1d",
            opacity: 0.18,
          }}
        />
      </div>
    ),
    size,
  );
}
