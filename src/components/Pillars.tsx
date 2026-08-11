import Section, { SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import { toFa } from "@/lib/utils";

const PILLARS = [
  {
    no: 1,
    title: "تخصص فنی",
    description: "تیمی متخصص در برنامه‌نویسی، هوش مصنوعی و دیتاساینس.",
    height: "h-16",
  },
  {
    no: 2,
    title: "راهکار متناسب",
    description: "هر راهکار را دقیقاً بر اساس نیاز و مقیاس کسب‌وکار شما طراحی می‌کنیم.",
    height: "h-24",
  },
  {
    no: 3,
    title: "پشتیبانی مستمر",
    description: "بعد از تحویل هم کنار شما می‌مانیم، نه فقط تا پایان پروژه.",
    height: "h-20",
    accent: true,
  },
  {
    no: 4,
    title: "امنیت و اطمینان",
    description: "زیرساخت، شبکه و داده‌های شما با استانداردهای امنیتی مدیریت می‌شوند.",
    height: "h-12",
  },
];

export default function Pillars() {
  return (
    <Section id="pillars" surface="pine">
      <SectionHeading
        eyebrow="چرا کوشش‌گران قرن؟"
        title="چهار ارزشی که در هر پروژه رعایت می‌کنیم"
        description="اینها اصولی هستند که نحوه‌ی کار ما را با هر کسب‌وکاری مشخص می‌کنند."
        className="[&_h2]:text-ink [&_p]:text-ink/75"
      />

      <ol className="mt-14 grid gap-px overflow-hidden rounded-card bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((pillar, i) => (
          <Reveal as="li" key={pillar.no} delay={i * 90}>
            <div className="flex h-full flex-col bg-pine p-7 transition-colors duration-300 hover:bg-pine-dark">
              {/* نقش‌مایه‌ی ستون — هم‌خوان با نشانه‌ی لوگو */}
              <div className="flex h-28 items-end gap-1.5" aria-hidden="true">
                <span
                  className={`w-2 rounded-t ${pillar.height} ${
                    pillar.accent ? "bg-brass" : "bg-ink/85"
                  }`}
                />
                <span className="w-2 rounded-t bg-ink/20" style={{ height: "70%" }} />
                <span className="w-2 rounded-t bg-ink/20" style={{ height: "45%" }} />
              </div>

              <p className="mt-6 nums font-heading text-caption font-semibold text-brass">
                ارزش {toFa(pillar.no)}
              </p>
              <h3 className="mt-1 font-heading text-h3 font-bold text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-ink/70">
                {pillar.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <p className="mt-10 max-w-2xl text-body leading-8 text-ink/80">
          کوشش‌گران قرن فقط تحویل پروژه نمی‌دهد؛ تا رسیدن به نتیجه‌ی واقعی، کنار شما
          می‌ماند.
        </p>
      </Reveal>
    </Section>
  );
}
