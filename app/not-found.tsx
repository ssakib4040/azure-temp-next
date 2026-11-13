import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-sm font-medium text-sky-300">404 · Page not found</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          We can’t find that page.
        </h1>
        <p className="mt-4 max-w-xl leading-7 text-slate-300">
          The address may be incorrect, or the page may have moved.
        </p>
        <Link
          className="mt-8 inline-flex rounded-md bg-sky-300 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
          href="/"
        >
          Go to home page
        </Link>
      </div>
    </main>
  );
}
