import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Samin Siddique",
  description: "Posts and ideas on engineering, design, and technology.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Blog
        </h1>
        <p className="text-gray-600 mb-12">
          Posts and ideas on engineering, design, and technology.
        </p>

        <div className="space-y-8">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-sm transition-all">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-xl font-semibold text-gray-900 mt-1 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-2">{post.summary}</p>
                {post.tags && (
                  <div className="flex gap-2 mt-3">
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
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
