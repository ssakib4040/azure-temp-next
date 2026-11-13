import Link from "next/link";

export default async function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 sm:px-10">
      <ul className="flex gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/ssr">SSR</Link>
        </li>
      </ul>

      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        <p className="mt-2 text-2xl font-medium text-white">Static Page</p>
      </div>
    </main>
  );
}
