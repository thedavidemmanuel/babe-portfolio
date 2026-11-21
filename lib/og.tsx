import { ImageResponse } from "next/og";
import { hero, site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };

// Colours mirror the tokens (--ink, --on-dark-strong, --on-dark-muted, --accent); CSS variables are not available here.
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#15231f",
          color: "#fffefa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 28, color: "#a9b5ae", letterSpacing: 3, textTransform: "uppercase" }}>
          <div style={{ width: 18, height: 18, background: "#b3202e" }} />
          {hero.eyebrow}
        </div>
        <div style={{ marginTop: 32, fontSize: 96, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>{site.name}</div>
      </div>
    ),
    ogSize,
  );
}
