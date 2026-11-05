import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { homeSections } from "@/data/navigation";
import { homeSectionMeta } from "@/lib/home-sections";
import { siteMedia } from "@/lib/site-media";
import { heroTitleClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const heroSection = homeSectionMeta.hero;

export function HeroSection() {
  return (
    <section
      id={heroSection.id}
      aria-label={heroSection.name}
      className="home-hero relative isolate min-h-[min(100svh,42rem)] overflow-hidden bg-[#610018] md:min-h-[calc(100dvh-4rem)]"
    >
      <div className="home-hero-media">
        <Image
          src={siteMedia.home.heroBurgundyRoad}
          alt="Go Coach Charters Prevost motorcoach"
          fill
          priority
          sizes="(min-width: 768px) 100vw, 0px"
          className="for_web object-cover"
        />
        <Image
          src={siteMedia.home.heroBurgundyRoad}
          alt=""
          width={4200}
          height={1581}
          sizes="220vw"
          className="for_mobile absolute bottom-[-1.5rem] left-[-120vw] h-auto w-[220vw] max-w-none object-contain md:bottom-0"
        />
      </div>

      <Container
        className={cn(
          "home-hero-copy relative z-10 flex min-h-[min(100svh,42rem)] flex-col justify-start md:justify-center",
          "px-4 pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-28 sm:pt-24 sm:pb-16",
          "md:min-h-[calc(100dvh-4rem)]",
        )}
      >
        <div className="flex w-full max-w-2xl flex-col items-start text-left">
          <h1 className="w-full text-left">
            <span className="block text-sm font-medium tracking-[0.02em] text-white sm:text-base md:text-lg">
              Travel With Go Coach Charters
            </span>
            <span
              className={cn(
                heroTitleClass,
                "-ml-[0.16em] mt-3 block text-left !text-[2rem] !leading-[1.08] !tracking-normal !text-white ![text-wrap:pretty] !drop-shadow-none min-[380px]:!text-[2.125rem] sm:mt-4 sm:!text-5xl sm:!leading-[1.1] md:!text-6xl lg:!text-7xl",
              )}
            >
              Group Travel,
              <br className="sm:hidden" /> Made Easy.
            </span>
          </h1>

          <p className="mt-4 w-full max-w-xl text-left text-sm leading-[1.65] text-white/85 sm:mt-6 sm:text-base sm:leading-7">
            From corporate events and school trips to weddings and group adventures, Go Coach
            Charters makes group transportation simple. Let us help you get where you need to go.
          </p>

          <Link
            href={homeSections.getStarted}
            className={cn(
              "group mt-6 inline-flex items-center justify-center gap-2 self-start rounded-full",
              "min-h-11 px-6 py-2.5 text-sm font-bold sm:mt-8 sm:min-h-12 sm:px-7",
              "bg-white text-[#610018] shadow-sm transition-colors duration-200",
              "border border-transparent hover:border-white hover:bg-[#610018] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
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
    </section>
  );
}
