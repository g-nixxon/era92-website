import { ImageResponse } from "next/og";

// Served at /api/og. Referenced from metadata.openGraph.images and metadata.twitter.images.
// We use an API route rather than the app/opengraph-image.tsx file convention because
// Next.js 14's next-metadata-route-loader embeds the source file path into generated JS
// as a single-quoted string and does not escape apostrophes — our project dir contains one.
export const runtime = "edge";

const SIZE = { width: 1200, height: 630 } as const;

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAF6ED",
          color: "#1F2027",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#FF4E00",
            fontFamily: "system-ui",
            fontWeight: 600,
          }}
        >
          era92 Creative
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 84,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            <span>World-class creative work,&nbsp;</span>
            <span style={{ fontStyle: "italic" }}>made differently.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 80, height: 4, background: "#FF4E00" }} />
            <div style={{ fontSize: 24, color: "#6B6660", fontFamily: "system-ui" }}>
              Brand &middot; Web &middot; Video &middot; Digital
            </div>
          </div>
        </div>
      </div>
    ),
    { ...SIZE }
  );
}
