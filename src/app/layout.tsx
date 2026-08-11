import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import MouseGlow from "@/components/ui/MouseGlow";
import "./globals.css";

// فونت عناوین — استعداد
const estedad = localFont({
  src: [
    { path: "../../public/fonts/Estedad-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Estedad-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Estedad-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Estedad-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-estedad",
  display: "swap",
  preload: true,
});

// فونت بدنه — وزیرمتن
const vazirmatn = localFont({
  src: [
    { path: "../../public/fonts/Vazirmatn-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Vazirmatn-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Vazirmatn-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Vazirmatn-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
  preload: true,
});

// TODO: با دامنه‌ی واقعی سایت جایگزین کنید
const SITE_URL = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "کوشش‌گران قرن | برنامه‌نویسی، هوش مصنوعی و فناوری اطلاعات",
    template: "%s | کوشش‌گران قرن",
  },
  description:
    "کوشش‌گران قرن ارائه‌دهنده‌ی خدمات برنامه‌نویسی، هوش مصنوعی، CRM و دستیار هوشمند، دیتاساینس و کلیه‌ی امور سخت‌افزاری، نرم‌افزاری و شبکه است. درخواست مشاوره‌ی رایگان.",
  keywords: [
    "برنامه‌نویسی",
    "هوش مصنوعی",
    "دیتاساینس",
    "اتوماسیون",
    "CRM",
    "دستیار هوشمند",
    "منشی هوشمند",
    "شبکه‌های کامپیوتری",
    "خدمات فناوری اطلاعات",
    "کوشش‌گران قرن",
  ],
  authors: [{ name: "کوشش‌گران قرن" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: SITE_URL,
    siteName: "کوشش‌گران قرن",
    title: "کوشش‌گران قرن | برنامه‌نویسی، هوش مصنوعی و فناوری اطلاعات",
    description:
      "فناوری که کسب‌وکار شما را جلو می‌برد. از برنامه‌نویسی تا هوش مصنوعی و زیرساخت شبکه. درخواست مشاوره‌ی رایگان.",
    // تصویر og به‌صورت خودکار از src/app/opengraph-image.tsx تولید می‌شود
  },
  twitter: {
    card: "summary_large_image",
    title: "کوشش‌گران قرن | برنامه‌نویسی، هوش مصنوعی و فناوری اطلاعات",
    description: "فناوری که کسب‌وکار شما را جلو می‌برد. درخواست مشاوره‌ی رایگان.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#232B5C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${estedad.variable} ${vazirmatn.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          پرش به محتوای اصلی
        </a>
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
