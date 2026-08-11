"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateLeadStatus, addLeadNoteAction, type LeadStatus } from "@/app/admin/actions";
import { toFa } from "@/lib/utils";

export type Lead = {
  id: string;
  created_at: string;
  full_name: string;
  phone: string;
  email: string | null;
  business_name: string;
  industry: string | null;
  stage: string;
  challenge: string;
  preferred_time: string | null;
  status: LeadStatus;
  source?: string | null;
};

export type LeadNote = {
  id: string;
  lead_id: string;
  note: string;
  created_at: string;
};

function exportCsv(leads: Lead[]) {
  const headers = [
    "نام", "تلفن", "ایمیل", "کسب‌وکار", "حوزه", "مرحله", "چالش", "زمان تماس", "منبع", "وضعیت", "تاریخ",
  ];
  const rows = leads.map((l) => [
    l.full_name, l.phone, l.email ?? "", l.business_name, l.industry ?? "",
    l.stage, l.challenge, l.preferred_time ?? "", l.source ?? "website",
    l.status, new Date(l.created_at).toLocaleString("fa-IR"),
  ]);
  const esc = (s: string) => `"${String(s).replace(/"/g, '""')}"`;
  const csv = "﻿" + [headers, ...rows].map((r) => r.map(esc).join(",")).join("\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `koshesh-garan-gharn-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

const STATUS_META: Record<LeadStatus, { label: string; className: string }> = {
  new: { label: "جدید", className: "bg-brass/15 text-brass" },
  contacted: { label: "تماس گرفته شد", className: "bg-white/10 text-ink" },
  scheduled: { label: "جلسه تنظیم شد", className: "bg-blue-500/15 text-blue-300" },
  won: { label: "موفق", className: "bg-green-500/15 text-green-300" },
  lost: { label: "منصرف", className: "bg-slate/15 text-slate" },
};

const STATUS_ORDER: LeadStatus[] = ["new", "contacted", "scheduled", "won", "lost"];

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("fa-IR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function LeadsManager({
  leads,
  notesByLead,
  error,
}: {
  leads: Lead[];
  notesByLead: Record<string, LeadNote[]>;
  error: string | null;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | LeadStatus>("all");
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads.filter((l) => {
      if (statusFilter !== "all" && l.status !== statusFilter) return false;
      if (!q) return true;
      return [l.full_name, l.phone, l.business_name, l.industry, l.challenge]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    });
  }, [leads, query, statusFilter]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: leads.length };
    for (const s of STATUS_ORDER) c[s] = 0;
    for (const l of leads) c[l.status] = (c[l.status] ?? 0) + 1;
    return c;
  }, [leads]);

  function changeStatus(id: string, status: LeadStatus) {
    setPendingId(id);
    startTransition(async () => {
      const res = await updateLeadStatus(id, status);
      setPendingId(null);
      if (res.ok) router.refresh();
      else alert(res.error ?? "تغییر وضعیت ناموفق بود.");
    });
  }

  return (
    <>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="font-heading text-h3 font-bold text-ink">
            درخواست‌های مشاوره
          </h1>
          <p className="mt-1 text-caption text-slate">
            مجموعاً {toFa(leads.length)} درخواست ثبت شده است.
          </p>
        </div>
        {leads.length > 0 && (
          <button
            type="button"
            onClick={() => exportCsv(filtered)}
            className="shrink-0 rounded-btn border border-sand px-4 py-2 text-caption text-ink transition-colors hover:border-brass hover:bg-white/5"
          >
            خروجی CSV
          </button>
        )}
      </div>

        {error ? (
          <div className="rounded-card border border-red-500/30 bg-red-500/10 px-5 py-4 text-body text-red-300">
            {error}
          </div>
        ) : (
          <>
            {/* فیلترها */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو در نام، تلفن، کسب‌وکار یا چالش…"
                className="w-full min-h-[44px] rounded-btn border border-sand bg-pine px-4 py-2.5 text-[0.95rem] text-ink transition-colors placeholder:text-slate/60 focus:border-brass focus:outline-none sm:max-w-sm"
              />
              <div className="flex flex-wrap gap-2">
                <FilterChip
                  active={statusFilter === "all"}
                  onClick={() => setStatusFilter("all")}
                  label={`همه (${toFa(counts.all)})`}
                />
                {STATUS_ORDER.map((s) => (
                  <FilterChip
                    key={s}
                    active={statusFilter === s}
                    onClick={() => setStatusFilter(s)}
                    label={`${STATUS_META[s].label} (${toFa(counts[s] ?? 0)})`}
                  />
                ))}
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-card border border-dashed border-sand bg-pine px-5 py-16 text-center text-slate">
                {leads.length === 0
                  ? "هنوز درخواستی ثبت نشده است."
                  : "نتیجه‌ای برای این جستجو/فیلتر یافت نشد."}
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((lead) => (
                  <LeadCard
                    key={lead.id}
                    lead={lead}
                    notes={notesByLead[lead.id] ?? []}
                    pending={pendingId === lead.id}
                    onStatusChange={changeStatus}
                  />
                ))}
              </div>
            )}
          </>
        )}
    </>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-caption transition-colors ${
        active
          ? "bg-brass text-white"
          : "border border-sand bg-pine text-slate hover:border-brass/50"
      }`}
    >
      {label}
    </button>
  );
}

function LeadCard({
  lead,
  notes,
  pending,
  onStatusChange,
}: {
  lead: Lead;
  notes: LeadNote[];
  pending: boolean;
  onStatusChange: (id: string, status: LeadStatus) => void;
}) {
  return (
    <article className="rounded-card border border-sand bg-pine p-5 shadow-soft sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        {/* اطلاعات اصلی */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h2 className="font-heading text-h3 font-semibold text-ink">
              {lead.full_name}
            </h2>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[0.8rem] font-medium ${STATUS_META[lead.status]?.className ?? ""}`}
            >
              {STATUS_META[lead.status]?.label ?? lead.status}
            </span>
          </div>

          <div className="mt-3 grid gap-x-6 gap-y-2 text-[0.95rem] sm:grid-cols-2">
            <InfoRow label="کسب‌وکار" value={lead.business_name} />
            <InfoRow label="حوزه" value={lead.industry} />
            <InfoRow
              label="تلفن"
              value={
                <a
                  href={`tel:${lead.phone}`}
                  dir="ltr"
                  className="text-brass underline-offset-2 hover:underline"
                >
                  {lead.phone}
                </a>
              }
            />
            <InfoRow
              label="ایمیل"
              value={
                lead.email ? (
                  <a
                    href={`mailto:${lead.email}`}
                    dir="ltr"
                    className="text-brass underline-offset-2 hover:underline"
                  >
                    {lead.email}
                  </a>
                ) : null
              }
            />
            <InfoRow label="مرحله" value={lead.stage} />
            <InfoRow label="زمان تماس" value={lead.preferred_time} />
          </div>

          <div className="mt-3">
            <p className="text-caption text-slate">چالش فعلی:</p>
            <p className="mt-1 text-[0.95rem] leading-7 text-ink">{lead.challenge}</p>
          </div>

          <p className="mt-3 text-caption text-slate">
            ثبت شده در {formatDate(lead.created_at)}
          </p>

          <NotesSection leadId={lead.id} notes={notes} />
        </div>

        {/* تغییر وضعیت */}
        <div className="shrink-0 sm:w-44">
          <label className="mb-1.5 block text-caption font-medium text-ink">
            وضعیت
          </label>
          <div className="relative">
            <select
              value={lead.status}
              disabled={pending}
              onChange={(e) => onStatusChange(lead.id, e.target.value as LeadStatus)}
              className="w-full min-h-[44px] cursor-pointer appearance-none rounded-btn border border-sand bg-bone px-3.5 py-2.5 text-[0.95rem] text-ink transition-colors focus:border-brass focus:outline-none disabled:opacity-60"
            >
              {STATUS_ORDER.map((s) => (
                <option key={s} value={s}>
                  {STATUS_META[s].label}
                </option>
              ))}
            </select>
            {pending && (
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <span className="block h-4 w-4 animate-spin rounded-full border-2 border-slate/30 border-t-brass" />
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function NotesSection({ leadId, notes }: { leadId: string; notes: LeadNote[] }) {
  const router = useRouter();
  const [text, setText] = useState("");
  const [pending, start] = useTransition();
  const [err, setErr] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  function submit() {
    const trimmed = text.trim();
    if (!trimmed) return;
    setErr(null);
    start(async () => {
      const res = await addLeadNoteAction(leadId, trimmed);
      if (res.ok) {
        setText("");
        router.refresh();
      } else {
        setErr(res.error ?? "ثبت یادداشت ناموفق بود.");
      }
    });
  }

  return (
    <div className="mt-4 border-t border-sand pt-3">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-1.5 text-caption font-medium text-slate hover:text-brass"
      >
        یادداشت‌های پیگیری ({toFa(notes.length)}) {expanded ? "▲" : "▼"}
      </button>

      {expanded && (
        <div className="mt-3 space-y-3">
          {notes.length > 0 && (
            <ul className="space-y-2">
              {notes.map((n) => (
                <li key={n.id} className="rounded-btn bg-bone/60 px-3 py-2 text-[0.85rem] leading-6 text-ink">
                  <p className="whitespace-pre-wrap">{n.note}</p>
                  <p className="mt-1 text-[0.7rem] text-slate">{formatDate(n.created_at)}</p>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={2}
              placeholder="مثلاً: تماس گرفته شد، قرار جلسه‌ی هفته‌ی بعد گذاشته شد…"
              className="w-full min-h-[44px] flex-1 resize-y rounded-btn border border-sand bg-bone px-3 py-2 text-[0.9rem] leading-6 text-ink placeholder:text-slate/60 focus:border-brass focus:outline-none"
            />
            <button
              type="button"
              disabled={pending || !text.trim()}
              onClick={submit}
              className="shrink-0 rounded-btn bg-brass px-4 py-2 text-caption font-medium text-white transition-colors hover:bg-brass-dark disabled:opacity-60"
            >
              {pending ? "در حال ثبت…" : "افزودن یادداشت"}
            </button>
          </div>
          {err && <p className="text-[0.75rem] text-red-400">{err}</p>}
        </div>
      )}
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex gap-2">
      <span className="shrink-0 text-slate">{label}:</span>
      <span className="min-w-0 break-words text-ink">{value || "—"}</span>
    </div>
  );
}
