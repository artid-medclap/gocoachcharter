"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/shared/Container";
import { homeSections } from "@/data/navigation";
import { homeSectionMeta } from "@/lib/home-sections";
import { siteMedia } from "@/lib/site-media";
import { heroTitleClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const heroSection = homeSectionMeta.hero;

const SLIDES = [
   {
    src: siteMedia.home.heroCarousel.group,
    alt: "Group travelers gathered in front of a Go Coach Charters coach",
    position: "object-[center_58%]",
  },
  {
    src: siteMedia.home.heroCarousel.prevost,
    alt: "Go Coach Charters Prevost motorcoach on an open lot",
    position: "object-center",
  },
   {
    src: siteMedia.home.heroCarousel.fleet,
    alt: "Go Coach Charters motorcoaches parked among Alberta pines",
    position: "object-[center_42%]",
  },
  {
    src: siteMedia.home.heroCarousel.interior,
    alt: "Luxury charter bus interior with leather seating and ambient lighting",
    position: "object-center",
    scale: true,
  },
  {
    src: siteMedia.home.heroCarousel.fleetLot,
    alt: "Go Coach Charters buses parked together in an open lot",
    position: "object-center",
  },
  {
    src: siteMedia.home.heroCarousel.fleetWide,
    alt: "Go Coach Charters fleet wide view",
    position: "object-center",
  },
  {
    src: siteMedia.home.heroCarousel.teamslot,
    alt: "Go Coach Charters Prevost motorcoach parked in an open lot",
    position: "object-center",
  }
] as const;

const ROTATE_MS = 2500;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const onVisibility = () => setIsVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (reduceMotion || !isVisible) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % SLIDES.length);
    }, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [isVisible, reduceMotion]);

  return (
    <section
      id={heroSection.id}
      aria-label={heroSection.name}
      className="home-hero relative isolate flex min-h-[100svh] overflow-hidden bg-[#1a0008]"
    >
      <div className="absolute inset-0" aria-hidden>
        {SLIDES.map((slide, index) => (
          <Image
            key={slide.alt}
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="100vw"
            className={cn(
              "object-cover transition-[opacity,transform] duration-1000 ease-out",
              slide.position,
              index === activeIndex ? "opacity-100" : "opacity-0",
              "scale" in slide && slide.scale ? "scale-110" : null,
              !reduceMotion && index === activeIndex && !("scale" in slide && slide.scale)
                ? "scale-105"
                : null,
            )}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0008]/55 to-black/75"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.28)_70%)]"
        aria-hidden
      />

      <Container
        className={cn(
          "relative z-10 flex w-full flex-1 flex-col items-center justify-center",
          "px-4 pt-24 pb-10 text-center sm:px-6 sm:py-16",
        )}
      >
        <div className="flex w-full max-w-[20rem] flex-col items-center text-center sm:max-w-3xl">
          <p className="max-w-[16rem] text-xs leading-5 font-medium tracking-[0.16em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] uppercase sm:max-w-none sm:text-base sm:leading-normal sm:tracking-[0.18em]">
            Travel With Go Coach Charters
          </p>

          <h1
            className={cn(
              heroTitleClass,
              "mt-3 text-center !text-[1.875rem] !text-white !leading-[1.08] !tracking-normal ![text-wrap:balance] min-[380px]:!text-[2.125rem] sm:mt-4 sm:!text-5xl md:!text-6xl lg:!text-7xl",
            )}
          >
            Group Travel, Made Easy.
          </h1>

          <Link
            href={homeSections.getStarted}
            className={cn(
              "group mt-6 inline-flex items-center justify-center gap-2 rounded-full",
              "min-h-12 w-full max-w-[18rem] px-5 py-2.5 text-sm font-bold sm:mt-8 sm:w-auto sm:max-w-none sm:px-8 sm:text-base",
              "bg-white text-[#610018] shadow-sm transition-colors duration-200",
              "border border-transparent hover:border-white hover:bg-[#610018] hover:text-white",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
            )}
          >
            Request a Quote
            <ArrowRight
              className="h-4 w-4 text-current transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </Container>

      <p className="sr-only" aria-live="polite">
        {SLIDES[activeIndex].alt}
      </p>
    </section>
  );
}
