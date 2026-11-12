import { unstable_noStore as noStore } from "next/cache";

export default function Home() {
  noStore();

  const renderedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "long",
  });

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        <header className="border-b border-slate-800 pb-8">
          <p className="mb-4 text-sm font-medium text-sky-300">Azure Static Web Apps · Next.js</p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
            A small hybrid app, running on the server.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            This page is rendered for each request. The timestamp below is generated on the server.
          </p>
        </header>

        <section aria-labelledby="server-render-title" className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <h2 id="server-render-title" className="text-sm font-medium text-slate-400">
              Server rendered at
            </h2>
            <p className="mt-2 text-2xl font-medium text-white">{renderedAt}</p>
          </div>
          <a
            className="w-fit rounded-md bg-sky-300 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            href="/api/hello"
          >
            Open the Hello World API
          </a>
        </section>

        <footer className="border-t border-slate-800 pt-6 text-sm text-slate-400">
          Try refreshing to see a new server timestamp, or request <code className="text-slate-200">/api/hello</code> for JSON.
        </footer>
      </div>
    </main>
  );
}
