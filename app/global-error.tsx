"use client";

import { useEffect } from "react";
import "./globals.css";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Send the error to your monitoring service here if one is configured.
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
          <p className="text-sm font-medium text-rose-300">Something went wrong</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">This page could not load.</h1>
          <p className="mt-4 max-w-xl leading-7 text-slate-300">Try again. If the problem continues, return to the home page and start over.</p>
          {error.digest ? <p className="mt-4 text-sm text-slate-400">Error reference: {error.digest}</p> : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="rounded-md bg-sky-300 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
              onClick={() => reset()}
            >
              Try again
            </button>
            {/* A full reload works even when the root layout or router has failed. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              className="rounded-md border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition-colors hover:border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-300"
              href="/"
            >
              Go home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
