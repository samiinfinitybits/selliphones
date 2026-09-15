import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Sell your phone for instant cash in Dubai`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0d",
          color: "#f4f0e7",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 30,
            letterSpacing: 4,
            color: "#c8fa4b",
          }}
        >
          <div style={{ display: "flex", width: 20, height: 20, background: "#c8fa4b" }} />
          <div style={{ display: "flex" }}>SELLIPHONES.AE</div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 100, fontWeight: 800, lineHeight: 1 }}>
            Old phone in,
          </div>
          <div style={{ display: "flex", marginTop: 8 }}>
            <div
              style={{
                display: "flex",
                fontSize: 100,
                fontWeight: 800,
                lineHeight: 1,
                color: "#0b0b0d",
                background: "#c8fa4b",
                padding: "4px 16px",
              }}
            >
              cash out.
            </div>
          </div>
        </div>

        {/* Footline */}
        <div style={{ display: "flex", gap: 24, fontSize: 28, color: "#8a877e" }}>
          <div style={{ display: "flex" }}>Free doorstep pickup · Dubai</div>
          <div style={{ display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>Paid on the spot</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
