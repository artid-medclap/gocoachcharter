"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { BookOpen, BusFront, ChevronRight, MapPinned } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionTitleAccent } from "@/components/shared/SectionHeading";
import { siteMedia } from "@/lib/site-media";
import { bodyTextSmClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

const WHY_ITEMS = [
  {
    id: "itineraries",
    icon: MapPinned,
    title: "Alberta-first itineraries",
    highlight: "City guides, seasonal events & Rockies routes",
    description:
      "Practical guides for Edmonton, Calgary, the Rockies, and seasonal events, written with real group travel in mind.",
    image: siteMedia.services.scenicTours,
    imageAlt: "Scenic Alberta charter tour",
  },
  {
    id: "planning",
    icon: BusFront,
    title: "Charter planning tips",
    highlight: "Pickup timing, fleet size & quote checklists",
    description:
      "Learn when a motorcoach beats carpools, how to time pickups, and what to share when you request a quote.",
    image: siteMedia.services.charterCoach,
    imageAlt: "Go Coach charter motorcoach",
  },
  {
    id: "action",
    icon: BookOpen,
    title: "Ideas you can act on",
    highlight: "From inspiration to booking in fewer steps",
    description:
      "Each article links to routes and services on Go Coach so you can move from inspiration to booking.",
    image: siteMedia.services.privateTours,
    imageAlt: "Group tour planning",
  },
] as const;

const ROTATE_MS = 5500;

export function BlogWhySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = WHY_ITEMS[activeIndex];

  useEffect(() => {
    if (isPaused) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WHY_ITEMS.length);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const selectTopic = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      event.preventDefault();
      setActiveIndex((prev) => {
        if (event.key === "ArrowDown") return prev === WHY_ITEMS.length - 1 ? 0 : prev + 1;
        return prev === 0 ? WHY_ITEMS.length - 1 : prev - 1;
      });
    },
    [],
  );

  return (
    <section
      className="border-y border-[#f2b3c7]/30 bg-white py-14 sm:py-16 md:py-20"
      aria-label="Why read our blog"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary-800">
            Why our blog
          </p> */}
          <h2 className="mt-4 text-balance text-2xl  capitalize font-semibold tracking-tight text-primary-950 sm:text-3xl md:text-4xl">
            Why read
            <SectionTitleAccent> the Go Coach blog?</SectionTitleAccent>
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl ${bodyTextSmClass}`}>
            Short, actionable stories from a team that moves groups across Alberta every week.
            Explore a topic below.
          </p>
        </div>

        <div
          className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-stretch lg:gap-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          <div
            className="relative z-10 flex flex-col gap-2 sm:gap-3"
            role="tablist"
            aria-label="Blog benefits"
            onKeyDown={onKeyDown}
          >
            {WHY_ITEMS.map((item, index) => {
              const isActive = index === activeIndex;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`blog-why-tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls={`blog-why-panel-${item.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectTopic(index)}
                  className={cn(
                    "group relative flex w-full items-start gap-4 overflow-hidden rounded-2xl border border-[#f2b3c7]/60 bg-white px-4 py-4 text-left text-[#141414] shadow-sm transition-all duration-300 sm:px-5 sm:py-5",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800/40",
                    isActive
                      ? "border-[#7a011f]/35 bg-surface-blush ring-2 ring-[#7a011f]/15 shadow-md"
                      : "hover:border-primary-300 hover:bg-surface-blush/50",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                      isActive ? "bg-[#7a011f] text-white" : "bg-primary-100 text-primary-900",
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1 pt-0.5">
                    <span className="flex items-start justify-between gap-2">
                      <span className="text-sm font-bold leading-snug text-[#141414] sm:text-base">
                        {item.title}
                      </span>
                      <ChevronRight
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0 text-primary-600 transition-transform duration-300",
                          isActive && "translate-x-0.5 text-[#7a011f]",
                        )}
                        aria-hidden
                      />
                    </span>
                    <span
                      className={cn(
                        "mt-1.5 block text-xs leading-5 text-[#3d3d3d] sm:text-sm sm:leading-6",
                        isActive && "font-medium text-[#141414]",
                      )}
                    >
                      {item.highlight}
                    </span>
                  </span>
                  {isActive && !isPaused && (
                    <span
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-primary-100"
                      aria-hidden
                    >
                      <span
                        key={`progress-${activeIndex}-${item.id}`}
                        className="block h-full w-full origin-left bg-[#7a011f] animate-blog-why-progress"
                        style={{ ["--blog-why-duration" as string]: `${ROTATE_MS}ms` }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`blog-why-panel-${active.id}`}
            aria-labelledby={`blog-why-tab-${active.id}`}
            aria-live="polite"
            className="relative min-h-[280px] overflow-hidden rounded-3xl border border-[#f2b3c7]/40 shadow-lg sm:min-h-[340px]"
          >
            {WHY_ITEMS.map((item, index) => {
              const PanelIcon = item.icon;
              return (
              <div
                key={item.id}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-in-out",
                  index === activeIndex
                    ? "z-10 scale-100 opacity-100"
                    : "z-0 scale-[1.02] opacity-0 pointer-events-none",
                )}
                aria-hidden={index !== activeIndex}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    <PanelIcon className="h-3.5 w-3.5" aria-hidden />
                    Featured insight
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white drop-shadow-sm sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white drop-shadow-sm sm:text-base sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            );
            })}
          </div>
        </div>

        {/* <p className="mt-8 text-center text-xs text-muted-foreground">
          Tip: Use arrow keys while a topic is focused to switch panels.
        </p> */}
      </Container>
    </section>
  );
}
