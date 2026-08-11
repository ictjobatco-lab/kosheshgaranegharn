"use client";

import { useEffect, useRef } from "react";

/**
 * نور ملایمی که دنبال موس حرکت می‌کند — فقط لایه‌ی تزئینی پس‌زمینه،
 * pointer-events ندارد و روی کلیک/تعامل کاربر تأثیری نمی‌گذارد.
 */
export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      el!.style.setProperty("--x", `${e.clientX}px`);
      el!.style.setProperty("--y", `${e.clientY}px`);
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className="mouse-glow" aria-hidden="true" />;
}
