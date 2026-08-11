import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// next/og (@vercel/og) فقط TTF/OTF را می‌پذیرد، نه woff2 — به همین دلیل به‌جای
// فایل محلی public/fonts/*.woff2، نسخه‌ی TTF از CDN عمومی گرفته می‌شود.
const FONT_URL =
  "https://cdn.jsdelivr.net/npm/vazirmatn@33.0.3/fonts/ttf/Vazirmatn-Bold.ttf";

export default async function OpengraphImage() {
  const fontData = await fetch(FONT_URL).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #232B5C 0%, #181E45 100%)",
          fontFamily: "Vazirmatn",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 40 40" fill="none">
            <circle cx="12" cy="12" r="4" stroke="#F6F5FB" strokeWidth="2.6" />
            <circle cx="28" cy="12" r="4" stroke="#F6F5FB" strokeWidth="2.6" />
            <circle cx="20" cy="28" r="4" stroke="#7C6FF0" strokeWidth="2.6" />
            <path
              d="M15.2 14.2 17.5 24.5M24.8 14.2 22.5 24.5M16 12H24"
              stroke="#F6F5FB"
              strokeWidth="2.2"
            />
          </svg>
          <span style={{ fontSize: 64, fontWeight: 700, color: "#F6F5FB" }}>
            کوشش‌گران قرن
          </span>
        </div>
        <span style={{ marginTop: 24, fontSize: 30, color: "#B9B4EA" }}>
          برنامه‌نویسی، هوش مصنوعی و فناوری اطلاعات
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Vazirmatn", data: fontData, style: "normal", weight: 700 }],
    }
  );
}
