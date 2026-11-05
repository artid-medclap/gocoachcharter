import type { ReactNode } from "react";
import Image from "next/image";

import { Container } from "@/components/shared/Container";
import { siteMedia } from "@/lib/site-media";
import { cn } from "@/lib/utils";

export const blogHeroSectionClass =
  "relative isolate overflow-hidden lg:min-h-[min(92vh,880px)]";

export const blogHeroContainerClass = cn(
  "relative z-10 flex flex-col items-center",
  "px-4 pt-[calc(6.5rem+env(safe-area-inset-top,0px))] pb-10 sm:pt-28 sm:pb-12",
  "lg:min-h-[min(92vh,880px)] lg:justify-center lg:pb-28 lg:pt-24 xl:pb-32",
);

export const blogHeroInnerClass =
  "flex w-full max-w-6xl flex-col items-center text-center lg:px-6 xl:px-10";

type BlogHeroShellProps = {
  children: ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
};

/** Shared full-bleed hero used on `/blog` and `/blog/[slug]`: same image, overlay, and spacing */
export function BlogHeroShell({
  children,
  className,
  imageSrc = siteMedia.home.blogHero,
  imageAlt = "Go Coach Charters Prevost motorcoach parked on an open lot",
}: BlogHeroShellProps) {
  return (
    <section className={cn(blogHeroSectionClass, className)} aria-label="Blog hero">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[rgba(0,0,0,0.49)]"
        aria-hidden
      />

      <Container className={blogHeroContainerClass}>
        <div className={blogHeroInnerClass}>{children}</div>
      </Container>
    </section>
  );
}
