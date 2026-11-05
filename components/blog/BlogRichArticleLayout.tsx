import type { CSSProperties, ReactNode } from "react";

import { BlogRichArticleView } from "@/components/blog/BlogRichArticleView";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import type { BlogRichArticle } from "@/types/blog";

type BlogRichArticleLayoutProps = {
  article: BlogRichArticle;
  children?: ReactNode;
};

/** Shared with grid column: keeps TOC and body aligned with no overlap */
const TOC_COLUMN = "16rem";

export function BlogRichArticleLayout({ article, children }: BlogRichArticleLayoutProps) {
  return (
    <div
      className="grid w-full grid-cols-1 bg-white lg:grid-cols-[var(--blog-toc-col)_minmax(0,1fr)]"
      style={{ "--blog-toc-col": TOC_COLUMN } as CSSProperties}
    >
      <aside
        className="hidden min-w-0 border-r border-[#f2b3c7]/35 bg-[#fff7f9] lg:block"
        aria-label="Article navigation"
      >
        <div
          className="sticky top-20 max-h-[calc(100vh-5.25rem)] overflow-y-auto overscroll-contain"
        >
          <BlogTableOfContents items={article.toc} className="w-full" />
        </div>
      </aside>

      <div className="min-w-0 px-4 py-8 sm:px-6 sm:py-10 lg:pr-6 lg:pl-6 xl:pr-8">
        <div className="mb-8 rounded-lg border border-[#f2b3c7]/40 bg-[#fff7f9] lg:hidden">
          <BlogTableOfContents items={article.toc} />
        </div>
        <BlogRichArticleView article={article} />
        {children}
      </div>
    </div>
  );
}
