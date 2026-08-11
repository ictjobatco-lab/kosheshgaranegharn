import type { Metadata } from "next";
import ChatPanel from "@/components/chat/ChatPanel";

export const metadata: Metadata = {
  title: "گفت‌وگو با دستیار هوشمند کوشش‌گران قرن",
  description:
    "از دستیار هوشمند کوشش‌گران قرن درباره‌ی خدمات نرم‌افزار، هوش مصنوعی و فناوری اطلاعات بپرسید و مسیر همکاری را روشن کنید.",
};

export const dynamic = "force-dynamic";

export default function ConsultantPage() {
  return <ChatPanel />;
}
