import Script from "next/script";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pillars from "@/components/Pillars";
import Process from "@/components/Process";
import Credibility from "@/components/Credibility";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

// داده‌ی ساختاریافته برای SEO (شرکت فناوری اطلاعات)
// TODO: url/email را با اطلاعات واقعی شرکت جایگزین کنید
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "کوشش‌گران قرن",
  alternateName: "Koushesh Garan Gharn — IT & Software Services",
  description:
    "خدمات برنامه‌نویسی، هوش مصنوعی، CRM و دستیار هوشمند، دیتاساینس و کلیه‌ی امور سخت‌افزاری، نرم‌افزاری و شبکه.",
  url: "https://example.com",
  email: "info@example.com",
  telephone: "+98-913-868-0217",
  areaServed: "IR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "اصفهان",
    addressCountry: "IR",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Pillars />
        <Process />
        <Credibility />
        <ConsultationForm />
      </main>
      <Footer />
      {/* ویجت چت کوشش‌گران قرن روی خود سایت */}
      <Script src="/widget.js" strategy="afterInteractive" />
    </>
  );
}
