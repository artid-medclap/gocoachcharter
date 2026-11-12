"use client";

import { ArrowRight, Quote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { reviews } from "@/data/reviews";
import { primaryButtonClass } from "@/lib/constants";
import { homeSectionMeta } from "@/lib/home-sections";
import { cn } from "@/lib/utils";

const reviewsSearchUrl =
  "https://www.google.com/search?q=Go+Coach+Charters+reviews";

export const customerReviewsSection = homeSectionMeta.reviews;

const displayedReviews = reviews;

const googleRating = 4.9;

const reviewStarFilledClass =
  "fill-[#FBBC04] text-[#FBBC04] stroke-[#FBBC04]";
const reviewStarEmptyClass =
  "fill-[#E8EAED] text-[#E8EAED] stroke-[#E8EAED]";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function StarRating({
  rating,
  className,
  size = "md",
}: {
  rating: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const icon =
    size === "sm"
      ? "h-3.5 w-3.5"
      : size === "lg"
        ? "h-[1.35rem] w-[1.35rem] sm:h-6 sm:w-6"
        : "h-4 w-4";

  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i));

        if (fill <= 0) {
          return (
            <Star
              key={i}
              aria-hidden
              strokeWidth={1.5}
              className={cn(icon, reviewStarEmptyClass)}
            />
          );
        }

        if (fill >= 1) {
          return (
            <Star
              key={i}
              aria-hidden
              strokeWidth={1.5}
              className={cn(icon, reviewStarFilledClass)}
            />
          );
        }

        return (
          <span key={i} className={cn("relative inline-flex", icon)}>
            <Star
              aria-hidden
              strokeWidth={1.5}
              className={cn("h-full w-full", reviewStarEmptyClass)}
            />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
              aria-hidden
            >
              <Star
                strokeWidth={1.5}
                className={cn("h-full w-full", reviewStarFilledClass)}
              />
            </span>
          </span>
        );
      })}
    </div>
  );
}

function ReviewCard({
  review,
  className,
}: {
  review: (typeof displayedReviews)[number];
  className?: string;
}) {
  return (
    <article
      data-review-card
      className={cn(
        "group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-primary-100/90 bg-white p-4 shadow-[0_8px_28px_rgba(53,0,20,0.05)] ring-1 ring-inset ring-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-[0_14px_36px_rgba(122,1,31,0.08)] sm:p-5",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#7a011f] to-transparent opacity-80"
        aria-hidden
      />
      <Quote
        className="h-6 w-6 text-primary-200 sm:h-7 sm:w-7"
        strokeWidth={1.25}
        aria-hidden
      />
      <StarRating rating={review.rating} size="sm" className="mt-2" />
      <blockquote
        className="mt-2.5 flex-1 text-sm leading-6 text-body-text line-clamp-6 sm:mt-3"
      >
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <footer className="mt-4 flex items-center gap-2.5 border-t border-primary-50 pt-3.5 sm:gap-3 sm:pt-4">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7a011f] to-primary-800 text-[0.6875rem] font-bold text-white shadow-[0_3px_10px_rgba(122,1,31,0.22)] ring-2 ring-white"
          aria-hidden
        >
          {review.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold leading-tight text-primary-950">
            {review.name}
          </p>
          <p className="truncate text-xs leading-snug text-muted-foreground">
            {review.role} · {review.location}
          </p>
        </div>
      </footer>
    </article>
  );
}

export function CustomerReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reviewListRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (!isInView || isPaused || motionPreference.matches) return;

    const timer = window.setInterval(() => {
      const nextIndex = (activeIndex + 1) % displayedReviews.length;
      const nextCard =
        reviewListRef.current?.querySelectorAll<HTMLElement>(
          "[data-review-card]",
        )[nextIndex];
      const firstCard =
        reviewListRef.current?.querySelector<HTMLElement>("[data-review-card]");
      if (nextCard && firstCard && reviewListRef.current) {
        reviewListRef.current.scrollTo({
          left: nextCard.offsetLeft - firstCard.offsetLeft,
          behavior: "smooth",
        });
      }
      setActiveIndex(nextIndex);
    }, 1500);

    return () => window.clearInterval(timer);
  }, [activeIndex, isInView, isPaused]);

  return (
    <HomeSection
      id={customerReviewsSection.id}
      sectionName={customerReviewsSection.name}
      tone="muted"
      decorated
      className="overflow-hidden"
    >
      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          className="mx-auto"
          title={
            <>
              What Our
              <SectionTitleAccent>Customers Say</SectionTitleAccent>
            </>
          }
        />

        <div
          ref={sectionRef}
          className="mx-auto mt-10 max-w-6xl rounded-[32px] bg-gradient-to-br from-primary-100/40 via-white to-surface-blush p-[1px] shadow-[0_24px_64px_rgba(53,0,20,0.08)] sm:mt-14"
        >
          <div
            className="rounded-[31px] bg-white/90 p-4 backdrop-blur-sm sm:p-6 lg:flex lg:gap-8 lg:p-8 xl:gap-10 xl:p-9"
          >
            <aside
              className="mb-8 flex flex-col items-center justify-center border-b border-primary-100 pb-8 text-center lg:mb-0 lg:w-[220px] lg:shrink-0 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8 xl:w-[240px] xl:pr-10"
              aria-label="Google rating"
            >
              <GoogleIcon className="h-9 w-9 sm:h-10 sm:w-10" />
              <p className="mt-3 text-sm font-semibold text-primary-950">
                Google Reviews
              </p>
              <p
                className="mt-1 text-3xl font-bold leading-none tracking-tight text-[#7a011f] min-[400px]:text-4xl sm:text-[2.75rem]"
              >
                {googleRating.toFixed(1)}
              </p>
              <StarRating
                rating={googleRating}
                size="lg"
                className="mt-3 justify-center gap-1"
              />
            </aside>

            <div
              ref={reviewListRef}
              aria-label="Customer reviews"
              className="flex min-w-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsPaused(false);
                }
              }}
            >
              {displayedReviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  className="w-full shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] xl:w-[calc((100%-2rem)/3)]"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href={reviewsSearchUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "min-h-12 gap-2 px-8 py-3 text-sm font-semibold",
              primaryButtonClass
            )}
          >
            Read more reviews
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </HomeSection>
  );
}
