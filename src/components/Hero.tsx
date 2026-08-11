import Container from "./ui/Container";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { IconCheck } from "./ui/icons";

const HIGHLIGHTS = [
  "از طراحی تا اجرا و پشتیبانی",
  "مشاوره‌ی اولیه رایگان",
  "تیم متخصص فناوری اطلاعات",
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-[4.5rem]">
      {/* گوی نورانی چرخان — پشت متن، تزئینی صرف */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-[300px] w-[300px] animate-rotate-glow rounded-full opacity-60 blur-[80px]"
        style={{ background: "linear-gradient(45deg, #3b82f6, #7C6FF0, #ec4899)" }}
        aria-hidden="true"
      />

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* متن (راست در RTL) */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-sand px-4 py-1.5 text-caption font-medium text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden="true" />
              توسعه نرم‌افزار، هوش مصنوعی و فناوری اطلاعات
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-[2.25rem] font-bold leading-[1.25] sm:text-[2.75rem] lg:text-h1">
              فناوری که کسب‌وکار شما
              <br />
              را جلو می‌برد.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-body text-slate">
              «کوشش‌گران قرن» شریک فناوری کسب‌وکار شماست: از برنامه‌نویسی و هوش مصنوعی
              تا CRM، دستیار هوشمند، و زیرساخت سخت‌افزاری و شبکه — همه‌چیز را با یک تیم
              متخصص و پاسخگو پیش می‌بریم.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="a" href="#consultation" variant="primary" size="lg">
                درخواست مشاوره‌ی رایگان
              </Button>
              <Button as="a" href="#services" variant="secondary" size="lg">
                خدمات ما را ببینید
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[0.95rem] text-ink/80">
                  <IconCheck width={18} height={18} className="text-brass" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* نمای انتزاعی (چپ در RTL) — هسته‌ی نورانی هوش مصنوعی + کارت‌های شناور داده */}
        <div className="order-1 lg:order-2">
          <Reveal delay={120}>
            <div
              className="relative aspect-square overflow-hidden rounded-card shadow-soft-md sm:aspect-[4/3.4]"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, #322A6B 0%, #232B5C 45%, #12163A 100%)",
              }}
              aria-hidden="true"
            >
              {/* هسته‌ی مرکزی نورانی — تپنده */}
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-brass/40 blur-3xl sm:h-52 sm:w-52" />

              <svg viewBox="0 0 400 340" className="relative h-full w-full">
                <g
                  className="animate-spin-slow"
                  style={{ transformOrigin: "200px 165px" }}
                  strokeLinecap="round"
                >
                  {/* حلقه‌های مداری — در حال چرخش آرام */}
                  <circle cx="200" cy="165" r="70" fill="none" stroke="#F6F5FB" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="6 4" />
                  <circle cx="200" cy="165" r="95" fill="none" stroke="#F6F5FB" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 6" />
                </g>
                <g strokeLinecap="round">
                  {/* گره‌های شبکه‌ی عصبی — هسته */}
                  {[
                    [200, 110], [165, 135], [235, 135], [150, 175],
                    [200, 165], [250, 175], [170, 205], [230, 205], [200, 225],
                  ].map(([x, y], i) => (
                    <g key={i}>
                      {i > 0 && (
                        <line x1="200" y1="165" x2={x} y2={y} stroke="#F6F5FB" strokeOpacity="0.25" strokeWidth="1" />
                      )}
                    </g>
                  ))}
                  <line x1="165" y1="135" x2="235" y2="135" stroke="#F6F5FB" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="150" y1="175" x2="250" y2="175" stroke="#F6F5FB" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="170" y1="205" x2="230" y2="205" stroke="#F6F5FB" strokeOpacity="0.2" strokeWidth="1" />
                  {[
                    [200, 110, 5, "#F6F5FB", 0.6, false], [165, 135, 4, "#F6F5FB", 0.5, false], [235, 135, 4, "#F6F5FB", 0.5, false],
                    [150, 175, 4.5, "#7C6FF0", 1, true], [250, 175, 4.5, "#7C6FF0", 1, true],
                    [170, 205, 4, "#F6F5FB", 0.5, false], [230, 205, 4, "#F6F5FB", 0.5, false], [200, 225, 5, "#F6F5FB", 0.6, false],
                    [200, 165, 9, "#7C6FF0", 1, true],
                  ].map(([x, y, r, fill, op, pulse], i) => (
                    <circle
                      key={`n-${i}`}
                      cx={x as number}
                      cy={y as number}
                      r={r as number}
                      fill={fill as string}
                      fillOpacity={op as number}
                      className={pulse ? "animate-pulse-node" : undefined}
                      style={pulse ? { animationDelay: `${i * 0.3}s` } : undefined}
                    />
                  ))}
                </g>
              </svg>

              {/* کارت: مدل هوش مصنوعی */}
              <div
                className="absolute right-4 top-4 w-[9.5rem] animate-float rounded-xl border border-white/15 bg-white/10 p-3 shadow-soft backdrop-blur-md sm:right-6 sm:top-6"
                style={{ animationDelay: "0s" }}
              >
                <p className="text-[0.75rem] font-medium text-ink">مدل هوش مصنوعی</p>
                <div className="mt-2 flex items-center justify-between text-[0.65rem] text-slate">
                  <span>در حال آموزش…</span>
                  <span className="nums text-brass">۷۲٪</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[72%] rounded-full bg-brass" />
                </div>
              </div>

              {/* کارت: شبکه‌ی عصبی */}
              <div
                className="absolute right-4 top-[6.75rem] w-[8.5rem] animate-float rounded-xl border border-white/15 bg-white/10 p-3 shadow-soft backdrop-blur-md sm:right-6 sm:top-32"
                style={{ animationDelay: "1.2s" }}
              >
                <p className="text-[0.75rem] font-medium text-ink">شبکه‌ی عصبی</p>
                <p className="mt-1.5 flex items-center gap-1.5 text-[0.65rem] text-slate">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  فعال
                </p>
              </div>

              {/* کارت: تحلیل داده */}
              <div
                className="absolute left-4 top-4 w-[9rem] animate-float rounded-xl border border-white/15 bg-white/10 p-3 shadow-soft backdrop-blur-md sm:left-6 sm:top-6"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="text-[0.75rem] font-medium text-ink">تحلیل داده</p>
                <svg viewBox="0 0 90 28" className="mt-1.5 h-6 w-full">
                  <path d="M2 20 L18 10 L34 22 L50 6 L66 16 L88 4" fill="none" stroke="#7C6FF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="mt-1 text-[0.65rem] text-brass">▲ ۲۴٪ نسبت به ماه قبل</p>
              </div>

              {/* کارت: اتوماسیون */}
              <div
                className="absolute bottom-4 left-4 w-[9.5rem] animate-float rounded-xl border border-white/15 bg-white/10 p-3 shadow-soft backdrop-blur-md sm:bottom-6 sm:left-6"
                style={{ animationDelay: "1.8s" }}
              >
                <p className="text-[0.75rem] font-medium text-ink">اتوماسیون</p>
                <p className="nums mt-1 text-[1.15rem] font-bold text-ink">۳۸</p>
                <div className="mt-1.5 flex items-end gap-[3px]" aria-hidden="true">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <span key={i} className="w-[5px] rounded-sm bg-brass/70" style={{ height: `${h * 0.16}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
