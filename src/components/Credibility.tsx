import Section, { SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import { IconQuote } from "./ui/icons";

// TODO: این آمار را با اعداد واقعی شرکت جایگزین کنید
const STATS = [
  { value: "چابک", label: "تیم توسعه‌ی نرم‌افزار" },
  { value: "متنوع", label: "پروژه‌های اجراشده" },
  { value: "پاسخگو", label: "پشتیبانی فنی" },
];

// وقتی نظر واقعی مشتری دیگری آماده شد، به این آرایه اضافه کنید — چیدمان خودش تطبیق پیدا می‌کند
const QUOTES = [
  {
    text: "تیم کوشش‌گران قرن برای ما اتوماسیون فرایندها را اجرا کرد و واقعاً راضی بودیم — حجم کارهای دستی‌مان حدود ۴۰٪ کم شد.",
    author: "مدیرعامل شرکت لوتوس",
  },
];

export default function Credibility() {
  return (
    <Section id="about" surface="bone">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* نمای انتزاعی شبکه/همکاری تیمی — به‌جای عکس */}
        <Reveal className="order-1">
          <div
            className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-card bg-sand shadow-soft-md"
            aria-hidden="true"
          >
            <svg viewBox="0 0 320 240" className="h-full w-full" fill="none">
              <g strokeLinecap="round">
                <path d="M60 170 140 90 230 130 270 60" stroke="#F1F0FA" strokeOpacity="0.2" strokeWidth="2" />
                <path d="M140 90 100 60 M140 90 190 60 M230 130 230 190" stroke="#F1F0FA" strokeOpacity="0.2" strokeWidth="2" />
                <circle cx="60" cy="170" r="9" fill="#F1F0FA" fillOpacity="0.55" />
                <circle cx="140" cy="90" r="11" fill="#7C6FF0" />
                <circle cx="100" cy="60" r="6" fill="#F1F0FA" fillOpacity="0.3" />
                <circle cx="190" cy="60" r="6" fill="#F1F0FA" fillOpacity="0.3" />
                <circle cx="230" cy="130" r="9" fill="#F1F0FA" fillOpacity="0.55" />
                <circle cx="270" cy="60" r="7" fill="#F1F0FA" fillOpacity="0.3" />
                <circle cx="230" cy="190" r="7" fill="#F1F0FA" fillOpacity="0.3" />
              </g>
            </svg>
          </div>
        </Reveal>

        {/* متن + آمار */}
        <div className="order-2">
          <SectionHeading
            eyebrow="درباره‌ی ما"
            title="یک تیم فنی، نه فقط یک پیمانکار"
            description="کوشش‌گران قرن کنار کسب‌وکارهای کوچک و متوسط می‌ایستد تا فناوری واقعاً به کار بیاید؛ از برنامه‌نویسی و هوش مصنوعی تا زیرساخت و شبکه."
          />

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="rounded-card border border-sand bg-pine px-3 py-5 text-center shadow-soft">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="nums block font-heading text-[1.75rem] font-bold leading-none text-ink">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-caption text-slate">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      {/* نقل‌قول‌ها */}
      <div
        className={
          QUOTES.length === 1
            ? "mx-auto mt-16 max-w-xl"
            : "mt-16 grid gap-5 md:grid-cols-2"
        }
      >
        {QUOTES.map((quote, i) => (
          <Reveal key={quote.author} delay={i * 90}>
            <figure className="flex h-full flex-col rounded-card border border-sand bg-pine p-7 shadow-soft">
              <IconQuote width={32} height={32} className="text-brass/70" />
              <blockquote className="mt-4 flex-1 text-body leading-8 text-ink">
                «{quote.text}»
              </blockquote>
              <figcaption className="mt-5 text-caption font-medium text-slate">
                — {quote.author}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
