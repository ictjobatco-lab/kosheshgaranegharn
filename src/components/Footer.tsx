import Logo from "./ui/Logo";
import Container from "./ui/Container";
import { IconMail, IconPhone, IconPin } from "./ui/icons";
import { toFa } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#services", label: "خدمات" },
  { href: "/#pillars", label: "چرا ما" },
  { href: "/#process", label: "فرایند همکاری" },
  { href: "/blog", label: "بلاگ" },
  { href: "/#consultation", label: "درخواست مشاوره" },
];

export default function Footer() {
  return (
    <footer className="bg-pine text-ink">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* برند */}
          <div className="md:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-[0.95rem] leading-8 text-ink/70">
              برنامه‌نویسی، هوش مصنوعی و زیرساخت فناوری اطلاعات. از ایده تا اجرا کنار
              کسب‌وکار شما می‌مانیم.
            </p>
          </div>

          {/* ناوبری */}
          <nav aria-label="پیوندهای فوتر" className="md:col-span-1">
            <h2 className="mb-4 font-heading text-[0.95rem] font-semibold text-ink">
              پیوندها
            </h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.95rem] text-ink/70 transition-colors hover:text-brass"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* تماس */}
          <div className="md:col-span-1">
            <h2 className="mb-4 font-heading text-[0.95rem] font-semibold text-ink">
              تماس با ما
            </h2>
            <ul className="space-y-3.5 text-[0.95rem] text-ink/80">
              {/* TODO: ایمیل واقعی شرکت رو جایگزین کنید */}
              <li>
                <a
                  href="mailto:info@example.com"
                  className="flex items-center gap-3 transition-colors hover:text-brass"
                  dir="ltr"
                >
                  <IconMail width={20} height={20} className="shrink-0 text-brass" />
                  <span>info@example.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+989138680217"
                  className="flex items-center gap-3 transition-colors hover:text-brass"
                >
                  <IconPhone width={20} height={20} className="shrink-0 text-brass" />
                  <span dir="ltr">{toFa("0913-868-0217")}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconPin width={20} height={20} className="shrink-0 text-brass" />
                <span>اصفهان، ایران</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink/15 pt-6 text-caption text-ink/60 sm:flex-row">
          <p>© {toFa("۱۴۰۴")} کوشش‌گران قرن. همه‌ی حقوق محفوظ است.</p>
          <p>کوشش‌گران قرن، خدمات نرم‌افزار و فناوری اطلاعات</p>
        </div>
      </Container>
    </footer>
  );
}
