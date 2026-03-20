import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Blog | Samin Siddique",
  description: "Posts and ideas on engineering, design, and technology.",
};

const delayClasses = ["animate-delay-1", "animate-delay-2", "animate-delay-3", "animate-delay-4", "animate-delay-5"];

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll animation="animate-fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Blog
          </h1>
          <p className="text-gray-600 mb-12">
            Posts and ideas on engineering, design, and technology.
          </p>
        </AnimateOnScroll>

        <div className="space-y-8">
          {sorted.map((post, i) => (
            <AnimateOnScroll
              key={post.slug}
              animation="animate-fade-up"
              delay={delayClasses[Math.min(i, 4)]}
            >
              <Link
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
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
