import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Samin Siddique`,
    description: post.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
        >
          &larr; Back to Blog
        </Link>

        <article className="mt-8">
          <time className="text-sm text-gray-500">{post.date}</time>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            {post.title}
          </h1>

          {post.tags && (
            <div className="flex gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="text-gray-700 leading-relaxed space-y-4">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
