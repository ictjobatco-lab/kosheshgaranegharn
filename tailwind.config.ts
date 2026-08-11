import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // پالت برند کوشش‌گران قرن — تم تیره (سبک فناوری/هوش مصنوعی)
        // نکته: اسم متغیرها (pine/brass/...) از قالب اولیه باقی مانده تا
        // نیازی به تغییر در ده‌ها فایل کامپوننت نباشد؛ فقط نقش/مقدار رنگ‌ها عوض شده.
        pine: "#141A38", // سطح تیره‌ی برجسته (کارت‌ها، پنل‌ها)
        "pine-dark": "#1C2350", // کمی روشن‌تر — hover روی کارت‌های تیره
        brass: "#7C6FF0", // بنفش روشن — رنگ تأکیدی اصلی (دکمه‌ها، آیکون‌ها)
        "brass-dark": "#6355D6",
        bone: "#0A0C1E", // پس‌زمینه‌ی اصلی صفحه — تیره‌ترین رنگ
        sand: "#262C56", // خطوط جداکننده و بردر روی پس‌زمینه‌ی تیره
        ink: "#F1F0FA", // متن اصلی — روشن
        slate: "#9C99C4", // متن فرعی — روشنِ کم‌رنگ‌تر
      },
      fontFamily: {
        heading: ["var(--font-estedad)", "system-ui", "sans-serif"],
        body: ["var(--font-vazirmatn)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // مقیاس تایپ برند
        h1: ["3rem", { lineHeight: "1.2", fontWeight: "700" }], // 48px
        h2: ["2rem", { lineHeight: "1.3", fontWeight: "700" }], // 32px
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }], // 24px
        body: ["1.0625rem", { lineHeight: "1.8" }], // 17px
        caption: ["0.875rem", { lineHeight: "1.6" }], // 14px
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      boxShadow: {
        // سایه‌های بسیار ملایم — بدون جلوه‌ی براق
        soft: "0 1px 2px rgba(20, 58, 50, 0.04), 0 8px 24px rgba(20, 58, 50, 0.05)",
        "soft-md": "0 2px 4px rgba(20, 58, 50, 0.05), 0 12px 32px rgba(20, 58, 50, 0.07)",
      },
      maxWidth: {
        content: "72rem", // 1152px — عرض ثابت دسکتاپ
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-glow": {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) rotate(180deg) scale(1.2)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg) scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        "pulse-node": "pulse-node 2.4s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "rotate-glow": "rotate-glow 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
