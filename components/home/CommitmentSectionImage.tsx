"use client";

import Image from "next/image";

import { siteMedia } from "@/lib/site-media";
import { cn } from "@/lib/utils";

export function CommitmentSectionImage() {
  return (
    <div
      className={cn(
        "relative min-h-[min(380px,72vw)] overflow-hidden bg-primary-950 sm:min-h-[460px] lg:min-h-[540px]",
        "rounded-2xl shadow-[0_24px_60px_rgba(53,0,20,0.18)] ring-1 ring-primary-100/80 sm:rounded-[28px]"
      )}
    >
      <Image
        src={siteMedia.home.heroCarousel.group}
        alt="Go Coach Charters bus with a group of travelers"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
        className="object-cover"
      />
    </div>
  );
}
