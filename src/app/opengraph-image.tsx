import { ImageResponse } from "next/og";
import { event } from "@/content/event";

export const alt = `${event.name} — 23 de maio · Jardim Botânico`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(201,169,97,0.18) 0%, transparent 50%), #0A0A0B",
          color: "#F5F1E8",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#C9A961",
          }}
        >
          <span style={{ display: "flex" }}>POKERPI</span>
          <span style={{ display: "flex", color: "#9A9A9F" }}>
            23 · MAI · 2026
          </span>
        </div>

        {/* hero text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              display: "flex",
              fontSize: 120,
              lineHeight: 1,
              letterSpacing: -4,
              color: "#FFFFFF",
              fontWeight: 300,
            }}
          >
            O poker mais
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 120,
              lineHeight: 1,
              letterSpacing: -4,
              fontStyle: "italic",
              color: "#C9A961",
              fontWeight: 400,
            }}
          >
            irado.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 36,
              fontStyle: "italic",
              color: "#6B6B70",
              fontWeight: 300,
            }}
          >
            <span style={{ display: "flex" }}>da sua vida</span>
            <span style={{ display: "flex", color: "#C8102E" }}>.</span>
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 18,
            color: "#9A9A9F",
          }}
        >
          <span style={{ display: "flex" }}>
            JARDIM BOTÂNICO · BRASÍLIA · DF
          </span>
          <span style={{ display: "flex" }}>
            30 VAGAS · INSCRIÇÕES ABERTAS
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
