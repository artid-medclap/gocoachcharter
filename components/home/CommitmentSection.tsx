import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { CommitmentSectionCarousel } from "@/components/home/CommitmentSectionCarousel";
import { homeSectionMeta } from "@/lib/home-sections";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
  sectionBodyTextClass,
} from "@/components/shared/SectionHeading";
import { primaryButtonClass } from "@/lib/constants";
import { sectionTitleStackClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const commitmentSection = homeSectionMeta.commitment;

export function CommitmentSection() {
  return (
    <HomeSection
      id={commitmentSection.id}
      sectionName={commitmentSection.name}
      tone="white"
      decorated
      className="overflow-hidden"
    >
      <Container className="relative max-w-[90rem]">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="relative isolate min-w-0 w-full">
            <CommitmentSectionCarousel />
          </div>

          <div
            className="relative z-10 flex min-w-0 flex-col justify-center py-2 text-center lg:py-0 lg:pl-2 lg:text-left"
          >
            <SectionHeading
              align="left"
              className="mx-auto w-full text-center lg:mx-0 lg:text-left"
              headingClassName="text-center lg:text-left"
              title={
                <span className={sectionTitleStackClass}>
                  <span className="block">Edmonton’s Local</span>
                  <span className="block">Charter Bus Company</span>
                  <SectionTitleAccent>For Group Travel</SectionTitleAccent>
                </span>
              }
            />

            <div
              className={`mx-auto mt-2 max-w-prose space-y-4 text-left sm:mt-3 sm:space-y-4 lg:mx-0 ${sectionBodyTextClass}`}
            >
              <p>
              Go Coach Charters has been providing reliable group transportation across 
              Alberta and Western Canada since 2013.
               We offer charter bus rentals for school trips, corporate travel, sports teams, 
               family outings, events, and long-distance journeys.
              </p>
              <p>
              With 13+ years of experience and more than 1,000 groups served, 
              our team understands the importance of reliable service and safety.
              Our professional drivers and well-maintained coaches help groups 
              travel comfortably and with confidence.
              </p>
              <p>
              We offer luxury motorcoach and mini coach rentals for local trips, 
              events, tours, and long-distance group travel. 
              These buses offer comfortable seating, luggage space,
              and select onboard amenities,
              including Wi-Fi and onboard washrooms.
              </p>
            </div>

            <Link
              href="/about-us/"
              className={cn(
                "group mx-auto mt-7 w-fit whitespace-nowrap sm:mt-8",
                primaryButtonClass,
                "min-h-10 px-4 py-2 text-center text-xs sm:min-h-11 sm:px-5 sm:text-sm",
              )}
            >
              Learn More About Go Coach Charters
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </HomeSection>
  );
}
