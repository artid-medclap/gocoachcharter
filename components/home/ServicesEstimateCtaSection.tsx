import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/shared/Badge";
import { Container } from "@/components/shared/Container";
import { homeSections } from "@/data/navigation";
import { siteMedia } from "@/lib/site-media";
import { sectionTitleClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function ServicesEstimateCtaSection() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-white"
      aria-label="Get a charter bus rental estimate"
    >
      <Image
        src={siteMedia.home.estimateRoadBus}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-right-bottom lg:object-fill"
        priority
      />

      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-[#610018]/70 lg:hidden"
      />

      <svg
        aria-hidden
        viewBox="0 0 64 86"
        className="pointer-events-none absolute left-[32%] bottom-[11%] z-10 hidden h-[6.25rem] w-[4.75rem] lg:block"
      >
        <defs>
          <radialGradient id="estimate-pin-body" cx="34%" cy="28%" r="72%">
            <stop offset="0%" stopColor="#d13a52" />
            <stop offset="48%" stopColor="#9a1633" />
            <stop offset="100%" stopColor="#610018" />
          </radialGradient>
        </defs>
        <ellipse cx="32" cy="82.5" rx="11" ry="3.2" fill="rgba(0,0,0,0.2)" />
        <path
          d="M32 80S6 48 6 30a26 26 0 1 1 52 0c0 18-26 50-26 50Z"
          fill="url(#estimate-pin-body)"
        />
        <circle cx="32" cy="28" r="10.5" fill="white" />
      </svg>

      <Container className="relative z-10 hidden h-full lg:block">
        <div className="relative min-h-[560px] lg:h-full lg:min-h-[600px]">
          <div className="relative z-20 max-w-xl lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
            <Badge
              tone="neutral"
              className="w-fit whitespace-nowrap border border-[#610018]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#610018] shadow-[0_4px_16px_rgba(97,0,24,0.06)]"
            >
              Please Share The Calculator Details
            </Badge>

            <h2 className={cn(sectionTitleClass, "mt-8 max-w-[35rem] text-[#610018] lg:text-[2.5rem]")}>
              Get an Estimate for
              <br />
              Your Charter Bus Rental
            </h2>

            <p className="mt-2 max-w-md text-xs leading-5 text-black sm:text-sm sm:leading-6">
              Enter your trip details to get an estimated charter bus rental cost based on your
              travel distance, trip duration, and number of buses.
            </p>

            <Link
              href={homeSections.getStarted}
              className={cn(
                "group mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-full",
                "bg-[#610018] px-5 py-2.5 text-xs font-bold text-white sm:text-sm",
                "border border-transparent transition-colors duration-200 hover:border-[#610018] hover:bg-white hover:text-[#610018]",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#610018]",
              )}
            >
              Calculate Bus Rental Cost
              <ArrowRight
                className="h-4 w-4 text-current transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </Container>

      <Container className="relative z-10 lg:hidden">
        <div className="flex min-h-[34rem] flex-col items-center px-1 pb-48 pt-12 text-center sm:min-h-[38rem] sm:px-0 sm:pb-56 sm:pt-16">
          <Badge
            tone="neutral"
            className="w-fit max-w-full border border-[#610018]/15 bg-white px-4 py-2 text-[0.7rem] font-semibold leading-snug text-[#610018] shadow-[0_4px_16px_rgba(97,0,24,0.06)] sm:px-5 sm:text-sm"
          >
            Please Share The Calculator Details
          </Badge>

          <h2 className={cn(sectionTitleClass, "mt-8 max-w-[20rem] text-[#610018] sm:max-w-md")}>
            Get an Estimate for
            <br />
            Your Charter Bus Rental
          </h2>

          <p className="mt-4 max-w-md text-sm leading-6 text-white sm:mt-5 sm:text-base sm:leading-7">
            Enter your trip details to get an estimated charter bus rental cost based on your
            travel distance, trip duration, and number of buses.
          </p>

          <Link
            href={homeSections.getStarted}
            className={cn(
              "group mt-8 inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full",
              "bg-[#610018] px-6 py-3 text-sm font-bold text-white",
              "border border-white/40 transition-colors duration-200 hover:border-white hover:bg-white hover:text-[#610018]",
            )}
          >
            Calculate Bus Rental Cost
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
