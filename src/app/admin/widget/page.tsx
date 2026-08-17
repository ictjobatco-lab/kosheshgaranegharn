import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { isAuthed } from "@/lib/auth";
import AdminShell from "@/components/admin/AdminShell";
import WidgetSettings from "@/components/admin/WidgetSettings";
import { getWidgetConfig } from "@/lib/rag/widget";

export const metadata: Metadata = { title: "ویجت", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

// آدرس واقعی سایت: از env (اگر ست شده) وگرنه از درخواست فعلی — هیچ دامنه‌ای هاردکد نیست.
async function getSiteUrl(): Promise<string> {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export default async function WidgetAdminPage() {
  if (!isAuthed()) redirect("/admin/login");
  const cfg = await getWidgetConfig();
  const siteUrl = await getSiteUrl();
  return (
    <AdminShell active="widget">
      <WidgetSettings config={cfg} siteUrl={siteUrl} />
    </AdminShell>
  );
}
