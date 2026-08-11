import Section, { SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import {
  IconStrategy,
  IconModel,
  IconBrand,
  IconStructure,
  IconSales,
} from "./ui/icons";

const SERVICES = [
  {
    icon: IconStrategy,
    title: "برنامه‌نویسی و توسعه‌ی نرم‌افزار",
    description:
      "طراحی و توسعه‌ی نرم‌افزار و اپلیکیشن اختصاصی، متناسب با فرایندهای کسب‌وکار شما.",
  },
  {
    icon: IconModel,
    title: "هوش مصنوعی و اتوماسیون",
    description:
      "از دستیار و منشی هوشمند تا خودکارسازی فرایندها؛ هوش مصنوعی را وارد کسب‌وکارتان می‌کنیم.",
  },
  {
    icon: IconBrand,
    title: "دیتاساینس و تحلیل داده",
    description:
      "داده‌های کسب‌وکار شما را به تحلیل و تصمیم‌های قابل‌اتکا تبدیل می‌کنیم.",
  },
  {
    icon: IconStructure,
    title: "سیستم مدیریت ارتباط با مشتری (CRM)",
    description:
      "سامانه‌ای هوشمند برای مدیریت مشتریان، فروش و ارتباطات تیم شما.",
  },
  {
    icon: IconSales,
    title: "زیرساخت فناوری اطلاعات، سخت‌افزار و شبکه",
    description:
      "از تأمین و راه‌اندازی سخت‌افزار تا طراحی و اجرای شبکه‌های کامپیوتری سازمانی.",
  },
];

export default function Services() {
  return (
    <Section id="services" surface="bone">
      <SectionHeading
        eyebrow="خدمات ما"
        title="از ایده تا اجرا، در کنار کسب‌وکار شما"
        description="پنج حوزه‌ی تخصصی که زیرساخت فناوری کسب‌وکار شما را کامل می‌کند."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={i * 70}>
              <article className="group flex h-full flex-col rounded-card border border-sand bg-pine p-7 shadow-soft transition-colors duration-300 hover:border-brass/40">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sand text-brass transition-colors duration-300 group-hover:bg-brass group-hover:text-white">
                  <Icon width={24} height={24} />
                </span>
                <h3 className="font-heading text-h3 font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-slate">
                  {service.description}
                </p>
              </article>
            </Reveal>
          );
        })}

        {/* کارت دعوت به اقدام — ششمین خانه‌ی گرید */}
        <Reveal delay={SERVICES.length * 70}>
          <a
            href="#consultation"
            className="flex h-full flex-col justify-between rounded-card bg-pine p-7 shadow-soft transition-colors duration-300 hover:bg-pine-dark"
          >
            <h3 className="font-heading text-h3 font-semibold text-ink">
              مطمئن نیستید کدام خدمت برای شماست؟
            </h3>
            <p className="mt-3 text-[0.95rem] leading-7 text-ink/70">
              در تماس اولیه‌ی رایگان، وضعیت شما را می‌شنویم و قدم بعدی را روشن می‌کنیم.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-brass">
              درخواست مشاوره
              <span aria-hidden="true">←</span>
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
