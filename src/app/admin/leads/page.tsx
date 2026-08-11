import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAuthed } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabase";
import AdminShell from "@/components/admin/AdminShell";
import LeadsManager, { type Lead, type LeadNote } from "@/components/admin/LeadsManager";

export const metadata: Metadata = { title: "لیدها", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  if (!isAuthed()) redirect("/admin/login");

  const supabase = getSupabaseAdmin();
  let leads: Lead[] = [];
  let notesByLead: Record<string, LeadNote[]> = {};
  let error: string | null = null;
  if (!supabase) {
    error = "اتصال Supabase تنظیم نشده است.";
  } else {
    const { data, error: dbError } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (dbError) error = dbError.message;
    else leads = (data as Lead[]) ?? [];

    // یادداشت‌های همه‌ی لیدها را یک‌جا می‌گیریم و بر اساس lead_id گروه‌بندی می‌کنیم
    const { data: notes } = await supabase
      .from("lead_notes")
      .select("*")
      .order("created_at", { ascending: false });
    for (const n of (notes as LeadNote[] | null) ?? []) {
      (notesByLead[n.lead_id] ??= []).push(n);
    }
  }

  return (
    <AdminShell active="leads">
      <LeadsManager leads={leads} notesByLead={notesByLead} error={error} />
    </AdminShell>
  );
}
