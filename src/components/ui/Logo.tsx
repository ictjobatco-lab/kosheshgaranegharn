import { cn } from "@/lib/utils";

type LogoProps = {
  /** پیش‌فرض «light» چون کل سایت تم تیره دارد؛ برای پس‌زمینه‌ی روشن (کارت سفید) از dark استفاده کنید */
  variant?: "dark" | "light";
  className?: string;
};

/**
 * لوگوی کوشش‌گران قرن: نشانه‌ی مداری (گره‌ی فناوری/شبکه) + واژه‌نشان فارسی.
 * نشانه با SVG ساخته شده تا در هر اندازه تیز بماند.
 */
export default function Logo({ variant = "light", className }: LogoProps) {
  const mainColor = variant === "light" ? "#F1F0FA" : "#141A38";

  return (
    <span
      className={cn("inline-flex items-center gap-2.5 select-none", className)}
      aria-label="کوشش‌گران قرن"
    >
      {/* نشانه: گره‌ی فناوری */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <g strokeLinecap="round">
          <circle cx="12" cy="12" r="4" stroke={mainColor} strokeWidth="2.6" />
          <circle cx="28" cy="12" r="4" stroke={mainColor} strokeWidth="2.6" />
          <circle cx="20" cy="28" r="4" stroke="#7C6FF0" strokeWidth="2.6" />
          <path d="M15.2 14.2 17.5 24.5M24.8 14.2 22.5 24.5M16 12H24" stroke={mainColor} strokeWidth="2.2" />
        </g>
      </svg>
      {/* واژه‌نشان */}
      <span
        className="font-heading text-2xl font-bold leading-none tracking-tight"
        style={{ color: mainColor }}
      >
        کوشش‌گران قرن
      </span>
    </span>
  );
}
