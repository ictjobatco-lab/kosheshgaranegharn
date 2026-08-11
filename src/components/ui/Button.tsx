import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-medium transition-colors duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // CTA اصلی: پس‌زمینه‌ی بنفشِ زنده با سایه‌ی نورانی ملایم
  primary:
    "bg-brass text-white hover:bg-brass-dark shadow-[0_0_24px_rgba(124,111,240,0.35)]",
  // دکمه‌ی ثانویه: کادر شفاف روی پس‌زمینه‌ی تیره
  secondary:
    "border border-sand text-ink hover:border-brass hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.95rem] min-h-[44px]",
  lg: "px-7 py-3.5 text-body min-h-[52px]",
};

type LinkButtonProps = {
  as?: "a";
  variant?: Variant;
  size?: Size;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type NativeButtonProps = {
  as: "button";
  variant?: Variant;
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.as === "button") {
    const { as, ...buttonRest } = rest as NativeButtonProps;
    return <button className={classes} {...buttonRest} />;
  }
  const { as, ...anchorRest } = rest as LinkButtonProps;
  return <a className={classes} {...anchorRest} />;
}
