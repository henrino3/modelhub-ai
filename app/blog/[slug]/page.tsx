import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10 md:px-10">
      <Link href="/blog" className="text-sm text-slate-300 hover:text-white">
        ← Back to blog
      </Link>
      <article className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-300">{post.description}</p>

        <div className="prose prose-invert mt-10 max-w-none">
          {paragraphs.map((paragraph) =>
            paragraph.startsWith("## ") ? (
              <h2 key={paragraph}>{paragraph.replace("## ", "")}</h2>
            ) : paragraph.startsWith("### ") ? (
              <h3 key={paragraph}>{paragraph.replace("### ", "")}</h3>
            ) : paragraph.startsWith("- ") ? (
              <ul key={paragraph}>
                {paragraph.split("\n").map((item) => (
                  <li key={item}>{item.replace(/^- /, "")}</li>
                ))}
              </ul>
            ) : (
              <p key={paragraph}>{paragraph}</p>
            ),
          )}
        </div>
      </article>
    </main>
  );
}
