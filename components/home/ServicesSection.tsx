import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { homeSectionMeta } from "@/lib/home-sections";
import { sectionCardTitleClass, sectionTitleStackClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

/** Shared label style for service card links */
const exploreServicesTextClass = "text-sm font-semibold text-primary-800";

const GROUPS = [
  {
    title: "Corporate Travel",
    description:
      "Conferences, meetings, employee transportation, and corporate events. Keep your guests and team on schedule with Go Coach Charters.",
  },
  {
    title: "School and College Trips",
    description:
      "Safe, on-time transportation for field trips, class excursions, university events, and school tournaments.",
  },
  {
    title: "Sports Teams",
    description:
      "Travel to games, tournaments, and sporting events. Dedicated luggage storage provides space for sports equipment and personal bags.",
  },
  {
    title: "Weddings & Events",
    description:
      "Guest transportation for weddings, festivals, concerts, and private events, helping everyone arrive together safely and comfortably.",
  },
  {
    title: "Church & Religious Groups",
    description:
      "Charter bus transportation for church groups, pilgrimages, and faith-based events, with comfortable travel options for groups of all sizes.",
  },
  {
    title: "Senior Group Tour",
    description:
      "Comfortable charter bus transportation for senior clubs, community groups, and organized outings. Our team makes group transportation simple and stress-free.",
  },
];

export const servicesSection = homeSectionMeta.services;

export function ServicesSection() {
  return (
    <HomeSection
      id={servicesSection.id}
      sectionName={servicesSection.name}
      tone="blush"
      className="overflow-hidden bg-surface-blush"
    >
      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          title={
            <span className={sectionTitleStackClass}>
              <span className="block text-foreground">Charter Bus Services</span>
              <SectionTitleAccent>For Every Kind of Group</SectionTitleAccent>
            </span>
          }
        />

        <div
          className="mx-auto mt-8 grid max-w-7xl min-w-0 items-stretch gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3"
        >
          {GROUPS.map((group) => (
            <Link
              key={group.title}
              href="/booking"
              aria-label={`Explore ${group.title} charter services`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-[0_10px_30px_rgba(53,0,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-primary-50/20 hover:shadow-[0_20px_42px_rgba(53,0,20,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700"
            >
              <div aria-hidden className="h-1 w-full bg-gradient-to-r from-primary-200 via-primary-500 to-primary-200" />

              <div className="flex flex-1 flex-col items-center px-5 py-7 text-center sm:px-6 sm:py-8">
                <h3
                  className={`${sectionCardTitleClass} transition-colors group-hover:text-primary-700`}
                >
                  {group.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.8125rem] leading-5 text-body-text sm:text-sm sm:leading-6">
                  {group.description}
                </p>
                <span
                  className={cn(
                    "mt-auto inline-flex items-center justify-center gap-2 pt-5",
                    exploreServicesTextClass
                  )}
                >
                  Explore services
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </HomeSection>
  );
}
