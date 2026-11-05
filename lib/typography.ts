import { cn } from "@/lib/utils";

/** Shared body copy on light surfaces */
export const bodyTextClass =
  "text-[0.9375rem] leading-6 text-body-text sm:text-base sm:leading-7 md:text-lg md:leading-8";

export const bodyTextSmClass =
  "text-[0.8125rem] leading-5 text-body-text sm:text-sm sm:leading-6 md:text-base md:leading-7";

/** Primary section titles (h2): homepage sections */
export const sectionTitleClass = cn(
  "text-balance font-semibold tracking-[-0.03em]",
  "text-[1.5rem] leading-[1.15] min-[380px]:text-[1.625rem]",
  "sm:text-3xl sm:leading-[1.12] md:text-4xl md:leading-[1.1] lg:text-5xl lg:leading-[1.06]"
);

/** Trust bar & secondary band titles */
export const sectionTitleCompactClass = cn(
  "text-balance font-semibold tracking-[-0.025em]",
  "text-lg leading-[1.2] sm:text-2xl sm:leading-[1.14] lg:text-3xl"
);

/** Titles on dark image / burgundy bands */
export const sectionTitleInvertedClass = cn(
  sectionTitleClass,
  "text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
);

/** Hero h1: scales smoothly from small phones to desktop */
export const heroTitleClass = cn(
  "text-balance font-medium tracking-[-0.02em] [word-spacing:normal]",
  "text-[1.875rem] leading-[1.12] min-[380px]:text-[2.125rem]",
  "sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl xl:text-[5rem]",
  "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
);

/** Stacked lines inside an h2 (consistent vertical rhythm) */
export const sectionTitleStackClass = "flex flex-col gap-1 sm:gap-1.5";

/** Accent line in a section title: no extra top margin (use stack gap instead) */
export const sectionTitleAccentClass = "block mt-0";

export const sectionTitleAccentOnDarkClass = "text-primary-200";

/** Inline accent within a title (FAQ, gallery, booking) */
export const sectionTitleEmphasisClass = "text-primary-800";

export const sectionTitleEmphasisBrandClass = "text-primary-700";

/** Card & grid item titles (h3) */
export const sectionCardTitleClass = cn(
  "font-semibold tracking-[-0.02em] text-primary-950",
  "text-base leading-snug sm:text-lg md:text-xl"
);

/** Large feature panel title on dark imagery */
export const featurePanelTitleClass = cn(
  "max-w-sm font-semibold tracking-[-0.025em] text-white",
  "text-xl leading-[1.16] sm:text-2xl sm:leading-[1.14] md:text-3xl lg:text-4xl"
);
