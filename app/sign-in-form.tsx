"use client";

import { useActionState } from "react";
import { authenticate } from "@/app/actions";

export function SignInForm() {
  const [error, formAction, isPending] = useActionState(authenticate, null);

  return (
    <form action={formAction} className="mt-8 space-y-5">
      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-200"
          htmlFor="email"
        >
          Email
        </label>
        <input
          autoComplete="email"
          className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
      </div>
      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-200"
          htmlFor="password"
        >
          Password
        </label>
        <input
          autoComplete="current-password"
          className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          type="password"
        />
      </div>
      {error ? (
        <p aria-live="polite" className="text-sm text-rose-300" role="alert">
          {error}
        </p>
      ) : null}
      <button
        className="w-full rounded-xl bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-wait disabled:opacity-60"
        disabled={isPending}
        type="submit"
      >
        {isPending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
