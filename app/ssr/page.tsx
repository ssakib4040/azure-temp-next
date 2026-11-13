import Link from "next/link";
import { connection } from "next/server";

export default async function Home() {
  await connection();

  const renderedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "long",
  });

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
        <p className="mt-2 text-2xl font-medium text-white"></p>
      </div>
    </main>
  );
}
