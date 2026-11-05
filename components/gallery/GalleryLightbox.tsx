"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { GalleryItem } from "@/types/gallery";

type GalleryLightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function GalleryLightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: GalleryLightboxProps) {
  const item = items[index];
  const total = items.length;

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndexChange((index + 1) % total);
      if (event.key === "ArrowLeft") onIndexChange((index - 1 + total) % total);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, onClose, onIndexChange, total]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[80] flex flex-col bg-black/94"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 text-white sm:px-6">
        <p className="min-w-0 truncate text-sm font-semibold sm:text-base">
          {item.title}
          <span className="ml-2 font-medium text-white/55">
            {index + 1} / {total}
          </span>
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery preview"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16">
        <button
          type="button"
          onClick={() => onIndexChange((index - 1 + total) % total)}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="relative h-full w-full max-w-6xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <button
          type="button"
          onClick={() => onIndexChange((index + 1) % total)}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-3 px-4 pb-5 sm:hidden">
        <button
          type="button"
          onClick={() => onIndexChange((index - 1 + total) % total)}
          className="inline-flex min-h-11 items-center rounded-full bg-white/10 px-5 text-sm font-semibold text-white"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => onIndexChange((index + 1) % total)}
          className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-primary-950"
        >
          Next
        </button>
      </div>
    </div>
  );
}
