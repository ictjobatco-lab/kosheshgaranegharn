"use client";

import { useFormState, useFormStatus } from "react-dom";
import { login } from "@/app/admin/actions";
import Logo from "@/components/ui/Logo";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-btn bg-brass px-7 py-3.5 text-body font-medium text-white transition-colors hover:bg-brass-dark disabled:opacity-70"
    >
      {pending ? (
        <>
          <span
            className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white"
            aria-hidden="true"
          />
          در حال ورود…
        </>
      ) : (
        "ورود به پنل"
      )}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useFormState(login, {});

  return (
    <div className="w-full max-w-sm rounded-card border border-sand bg-pine p-7 shadow-soft-md sm:p-8">
      <div className="mb-6 flex flex-col items-center text-center">
        <Logo />
        <h1 className="mt-5 font-heading text-h3 font-semibold text-ink">
          پنل مدیریت
        </h1>
        <p className="mt-2 text-caption text-slate">
          برای دیدن درخواست‌های مشاوره وارد شوید.
        </p>
      </div>

      <form action={formAction} noValidate>
        <label htmlFor="password" className="mb-1.5 block text-caption font-medium text-ink">
          رمز عبور
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          autoFocus
          dir="ltr"
          className="w-full min-h-[44px] rounded-btn border border-sand bg-bone px-3.5 py-2.5 text-[0.95rem] text-ink transition-colors focus:border-brass focus:outline-none"
        />

        {state?.error && (
          <p role="alert" className="mt-3 text-caption text-red-600">
            {state.error}
          </p>
        )}

        <div className="mt-6">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
