import { ImageResponse } from "next/og";

export const alt = "nrki — Norsk Riks-KI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          borderTop: "8px solid #931228",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#931228",
            textTransform: "uppercase",
            letterSpacing: 4,
            fontWeight: 700,
          }}
        >
          <div style={{ width: 14, height: 14, background: "#931228" }} />
          Norsk Riks-KI · privat konseptforslag
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            marginTop: 60,
          }}
        >
          <div style={{ width: 56, height: 56, background: "#931228" }} />
          <div
            style={{
              fontSize: 200,
              fontWeight: 700,
              color: "#0a1626",
              lineHeight: 1,
              letterSpacing: -6,
            }}
          >
            nrki
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 600,
            color: "#0a1626",
            lineHeight: 1.15,
            marginTop: 40,
            maxWidth: 1000,
            letterSpacing: -1,
          }}
        >
          En åpen KI-infrastruktur for norsk offentlig sektor.
        </div>

        {/* Spacer */}
        <div style={{ display: "flex", flex: 1 }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#475569",
            borderTop: "1px solid #e4e4e7",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex" }}>nrki.no</div>
          <div style={{ display: "flex" }}>
            Ikke tilknyttet NRK eller den norske stat.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
