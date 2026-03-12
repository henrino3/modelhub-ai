import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 md:px-10">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Blog</p>
          <h1 className="mt-2 text-4xl font-semibold text-white">LLM pricing, model strategy, and practical AI decisions.</h1>
        </div>
        <Link href="/" className="text-sm text-slate-300 hover:text-white">
          Back home →
        </Link>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">{post.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex text-sm text-cyan-300 hover:text-cyan-200">
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
