"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Maximize2, Phone } from "lucide-react";

import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { Container } from "@/components/shared/Container";
import { allGalleryItems, galleryPageCategories } from "@/data/gallery";
import { primaryButtonClass } from "@/lib/constants";
import { siteMedia } from "@/lib/site-media";
import { bodyTextSmClass, heroTitleClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 18;

function tileClass(index: number) {
  if (index === 0) return "sm:col-span-2 sm:row-span-2";
  if (index % 7 === 3) return "sm:row-span-2";
  if (index % 8 === 5) return "md:col-span-2";
  return "";
}

export function GalleryExperience() {
  const [category, setCategory] = useState<(typeof galleryPageCategories)[number]>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (category === "All") return allGalleryItems;
    return allGalleryItems.filter((item) => item.category === category);
  }, [category]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative isolate min-h-[22rem] overflow-hidden bg-black sm:min-h-[26rem] lg:min-h-[30rem]">
        <Image
          src={siteMedia.home.heroPrevostLot}
          alt="Go Coach charter bus on open pavement"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_50%]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.55)_42%,rgba(0,0,0,0.2)_70%,transparent_88%)]"
          aria-hidden
        />
        <Container className="relative z-10 flex min-h-[22rem] flex-col justify-end pb-10 pt-28 sm:min-h-[26rem] sm:pb-14 lg:min-h-[30rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
            Photo gallery
          </p>
          <h1 className={cn(heroTitleClass, "mt-3 max-w-3xl text-left")}>
            See the coaches. Then book the trip.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
            A look at Go Coach Charters’ fleet, cabins, and onboard amenities, photographed for
            group travel across Alberta.
          </p>
        </Container>
      </section>

      <section className="sticky top-16 z-30 border-b border-primary-100 bg-white/92 backdrop-blur-md sm:top-[4.5rem]">
        <Container className="flex items-center gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {galleryPageCategories.map((name) => {
            const count =
              name === "All"
                ? allGalleryItems.length
                : allGalleryItems.filter((item) => item.category === name).length;
            const isActive = category === name;
            return (
              <button
                key={name}
                type="button"
                onClick={() => {
                  setCategory(name);
                  setVisibleCount(PAGE_SIZE);
                }}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-primary-900 text-white"
                    : "bg-primary-50 text-primary-900 hover:bg-primary-100",
                )}
              >
                {name}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[11px] tabular-nums",
                    isActive ? "bg-white/20 text-white" : "bg-white text-primary-800",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </Container>
      </section>

      <section className="bg-surface-blush py-10 sm:py-14">
        <Container>
          <div className="grid auto-rows-[12rem] grid-flow-dense grid-cols-1 gap-3 sm:auto-rows-[14rem] sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:auto-rows-[16rem] lg:grid-cols-4">
            {visible.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-primary-950/5 text-left shadow-[0_10px_30px_rgba(53,0,20,0.06)]",
                  tileClass(index),
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 4}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  {item.category}
                </span>
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h2 className="text-sm font-semibold leading-snug sm:text-base">{item.title}</h2>
                </div>
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-primary-200 bg-white px-6 py-16 text-center">
              <Camera className="mx-auto h-8 w-8 text-primary-300" />
              <p className="mt-3 font-semibold text-primary-950">No photos in this collection</p>
              <button
                type="button"
                onClick={() => setCategory("All")}
                className="mt-4 text-sm font-semibold text-primary-800 underline-offset-4 hover:underline"
              >
                View all photos
              </button>
            </div>
          ) : null}

          {visibleCount < filtered.length ? (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="inline-flex min-h-12 items-center rounded-full bg-[#141414] px-7 text-sm font-bold text-white transition-colors hover:bg-primary-900"
              >
                Load more photos
              </button>
            </div>
          ) : null}

          <div className="mt-14 rounded-3xl bg-white px-6 py-8 shadow-[0_12px_36px_rgba(53,0,20,0.06)] sm:px-10 sm:py-10">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-primary-950 sm:text-3xl">
                  Ready to travel with this fleet?
                </h2>
                <p className={cn("mt-3", bodyTextSmClass)}>
                  Request a quote for school trips, corporate travel, weddings, and group tours
                  across Alberta and Western Canada.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link href="/booking" className={cn("min-h-12 px-6 text-sm", primaryButtonClass)}>
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+17802383866"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary-200 px-6 text-sm font-semibold text-primary-950 hover:border-primary-400"
                >
                  <Phone className="h-4 w-4" />
                  +1 780-238-3866
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {activeIndex !== null ? (
        <GalleryLightbox
          items={visible}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onIndexChange={setActiveIndex}
        />
      ) : null}
    </main>
  );
}
