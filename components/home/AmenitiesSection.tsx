import {
  Armchair,
  Coffee,
  Luggage,
  MapPinCheck,
  MonitorPlay,
  Snowflake,
  Toilet,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { homeSectionMeta } from "@/lib/home-sections";

const ONBOARD_FEATURES: { icon: LucideIcon; title: string }[] = [
  { icon: Snowflake, title: "Climate Control" },
  { icon: Toilet, title: "Onboard Restrooms" },
  { icon: Luggage, title: "Overhead Luggage Storage" },
  { icon: Zap, title: "110 Power Outlets" },
  { icon: Wifi, title: "Wi-Fi" },
  { icon: Coffee, title: "Cup Holders" },
  { icon: MonitorPlay, title: "Multi Screen Entertainment System" },
  { icon: MapPinCheck, title: "Live Bus Tracking with ETA" },
  { icon: Armchair, title: "Plus Reclining Seat " },
];

export const amenitiesSection = homeSectionMeta.amenities;

function FeatureSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="flex shrink-0 list-none items-stretch gap-8 p-0 pr-8 sm:gap-10 sm:pr-10 lg:gap-12 lg:pr-12"
      aria-hidden={duplicate}
    >
      {ONBOARD_FEATURES.map(({ icon: Icon, title }) => (
        <li
          key={`${duplicate ? "dup" : "orig"}-${title}`}
          className="flex w-[8.5rem] shrink-0 sm:w-[8.5rem] lg:w-[9.5rem]"
        >
          <article className="group flex w-full flex-col items-center gap-2 text-center">
            <span
              className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-primary-100 bg-white text-primary-900 shadow-[0_8px_22px_rgba(88,0,33,0.1)] ring-1 ring-white transition-colors duration-300 group-hover:border-primary-200 group-hover:bg-primary-900 group-hover:text-white sm:h-20 sm:w-20 lg:h-[5.5rem] lg:w-[5.5rem]"
            >
              <Icon
                className="h-9 w-9 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                strokeWidth={1.85}
                aria-hidden
              />
            </span>
           
              <h3
                className="break-words text-sm font-bold leading-snug tracking-[-0.01em] text-primary-950 min-[400px]:text-[0.9375rem] sm:text-base lg:text-[0.9375rem]"
              >
                {title}
              </h3>

          </article>
        </li>
      ))}
    </ul>
  );
}

export function AmenitiesSection() {
  return (
    <HomeSection
      id={amenitiesSection.id}
      sectionName={amenitiesSection.name}
      tone="blush"
      decorated
      className="overflow-hidden"
    >
      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          className="mx-auto"
          title={
            <span className="inline-block text-balance">
              What&apos;s On{" "}
              <SectionTitleAccent className="!inline !mt-0">
                Board?
              </SectionTitleAccent>
            </span>
          }
        />
      </Container>

      <Container className="relative mt-10 sm:mt-12 lg:mt-14">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-blush from-0% via-surface-blush/85 via-45% to-transparent to-100% sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-blush from-0% via-surface-blush/85 via-45% to-transparent to-100% sm:w-20"
          aria-hidden
        />

        <div
          className="amenities-marquee relative overflow-hidden"
          aria-label="Onboard amenities"
        >
          <div className="flex w-max animate-amenities-marquee items-center py-1 pl-2 sm:pl-3">
            <FeatureSet />
            <FeatureSet duplicate />
          </div>
        </div>
      </Container>
    </HomeSection>
  );
}
