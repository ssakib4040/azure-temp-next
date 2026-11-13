import Link from "next/link";
import { auth } from "@/auth";
import { logOut } from "@/app/actions";
import { SignInForm } from "@/app/sign-in-form";

export default async function Home() {
  const session = await auth();
  const user = session?.user;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 sm:px-10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        <Link className="font-semibold tracking-wide text-white" href="/">
          Hybrid Starter
        </Link>
        <Link
          className="text-sm text-slate-400 transition hover:text-cyan-200"
          href="/ssr"
        >
          SSR example
        </Link>
      </nav>

      <div className="mx-auto grid max-w-5xl items-center gap-14 py-20 lg:grid-cols-[1fr_0.9fr] lg:py-28">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Auth.js credentials demo
          </p>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Sign in and see your session user.
          </h1>
          <p className="mt-5 max-w-lg leading-7 text-slate-400">
            This example checks credentials against a small in-memory user list
            and keeps the signed-in identity in an encrypted session cookie.
          </p>
          <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Demo account
            </p>
            <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-[90px_1fr]">
              <dt className="text-slate-500">Email</dt>
              <dd className="font-mono text-slate-200">demo@example.com</dd>
              <dt className="text-slate-500">Password</dt>
              <dd className="font-mono text-slate-200">demo-pass-123</dd>
            </dl>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-cyan-950/20 sm:p-9">
          {user ? (
            <>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-emerald-300">
                    Signed in
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Welcome, {user.name ?? "user"}
                  </h2>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  {user.role}
                </span>
              </div>
              <dl className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/60 px-5">
                <div className="py-4">
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    User ID
                  </dt>
                  <dd className="mt-1 font-mono text-sm text-slate-200">
                    {user.id}
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm text-slate-200">{user.email}</dd>
                </div>
                <div className="py-4">
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Role
                  </dt>
                  <dd className="mt-1 text-sm capitalize text-slate-200">
                    {user.role}
                  </dd>
                </div>
              </dl>
              <form action={logOut} className="mt-6">
                <button className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5">
                  Sign out
                </button>
              </form>
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-cyan-300">Welcome back</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Sign in to continue
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Use the demo account shown on the left.
              </p>
              <SignInForm />
            </>
          )}
        </section>
      </div>

      <p className="mx-auto max-w-5xl border-t border-white/10 pt-5 text-xs leading-5 text-slate-500">
        Demo only: this example stores its user and password in source code. Do
        not use these credentials or this storage approach for real accounts.
      </p>
    </main>
  );
}
