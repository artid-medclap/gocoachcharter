"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import { BlogHeroShell } from "@/components/blog/BlogHeroShell";
import { BlogWhySection } from "@/components/blog/BlogWhySection";

import { Container } from "@/components/shared/Container";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { blogPosts, formatBlogDate } from "@/data/blog";
import { primaryButtonClass } from "@/lib/constants";
import { bodyTextClass, bodyTextSmClass, heroTitleClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function BlogPageView() {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return blogPosts;
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  const sortedPosts = useMemo(
    () => [...filteredPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
    [filteredPosts],
  );

  return (
    <main className="min-h-screen bg-surface-blush">
      <BlogHeroShell>
        <h1
          className={cn(
            "mx-auto mt-6 flex w-full max-w-6xl flex-col items-center gap-3 text-center sm:mt-8 sm:gap-5 lg:mt-10 lg:gap-6",
            heroTitleClass,
          )}
        >
          <span>Travel Ideas & Group</span>
          <span className="text-white">Charter Insights</span>
        </h1>
        <div className="mt-8 flex w-full justify-center sm:mt-7 lg:mt-8">
          <Link
            href="#blog-articles"
            className={cn(
              "group inline-flex min-h-10 items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold sm:min-h-11 sm:px-7",
              primaryButtonClass,
            )}
          >
            Our Blogs
            <ArrowRight
              className="h-6 w-6 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </BlogHeroShell>

      {/* Blog cards */}
      <section
        id="blog-articles"
        className="scroll-mt-[4.75rem] py-12 sm:py-16 md:py-20"
        aria-label="Blog articles"
      >
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <SectionHeading
              align="center"
              wide
              className="mx-auto w-full"
              title={
                <>
                  Latest Articles
                  <SectionTitleAccent>From Our Team</SectionTitleAccent>
                </>
              }
              description="Search titles or browse below, every post opens in its own URL for easy sharing."
            />

            <label className="relative mt-8 w-full max-w-md">
              <span className="sr-only">Search articles</span>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="h-12 w-full rounded-full border border-[#f2b3c7]/50 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary-800/30"
              />
            </label>
          </div>

          {filteredPosts.length === 0 ? (
            <p className={`mt-12 text-center ${bodyTextClass}`}>
              No articles match your search. Try another keyword.
            </p>
          ) : (
            <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {sortedPosts.map((post) => (
                <li key={post.slug} className="flex">
                  <article
                    className="group flex w-full flex-col overflow-hidden rounded-[1.25rem] border border-neutral-200 bg-white transition-all hover:border-primary-200 hover:shadow-md sm:rounded-[1.5rem]"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative block aspect-[16/10] overflow-hidden bg-neutral-100"
                    >
                      <Image
                        src={post.imageSrc}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h2 className="line-clamp-2 text-base font-bold leading-snug text-neutral-900 sm:text-lg">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="transition-colors group-hover:text-[#7a011f]"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-2 text-sm text-neutral-500">
                        <time dateTime={post.publishedAt}>
                          {formatBlogDate(post.publishedAt)}
                        </time>
                        <span aria-hidden> | </span>
                        <span className="font-medium text-[#7a011f]">Blog</span>
                      </p>
                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-neutral-600">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className={cn(
                          "mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 px-5 text-sm",
                          primaryButtonClass,
                        )}
                      >
                        Read article
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <BlogWhySection />
    </main>
  );
}
