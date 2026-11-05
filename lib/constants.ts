export const SITE_NAME = "GoCoach";
export const SITE_TAGLINE = "Book bus tickets & coach tours in minutes";
export const SITE_DESCRIPTION =
  "Search, compare, and book bus tickets and multi-day coach tours across 500+ routes with verified operators, real-time tracking, and a best price guarantee.";

// Placeholder: replace with the production domain before deploying.
export const SITE_URL = "https://www.gocoach.com";

export const CONTACT_EMAIL = "info@gocoach.ca";
export const CONTACT_PHONE = "+1 780-238-3866";

export const CONTACT_ADDRESS = {
  line: "2016 Sherwood Dr, Sherwood Park, AB T8A 3X3, Canada",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=2016+Sherwood+Dr,+Sherwood+Park,+AB+T8A+3X3,+Canada",
  embedUrl:
    "https://www.google.com/maps?q=Go+Coach+Charters+2016+Sherwood+Dr+Sherwood+Park+AB&output=embed",
};

/** Internal routes until public profile URLs are set (swap to https://… when ready). */
export const SOCIAL_LINKS = {
  facebook: "/contact",
  instagram: "/contact",
  twitter: "/contact",
  linkedin: "/contact",
  youtube: "/contact",
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;

export const FOOTER_SOCIAL: { platform: SocialPlatform; label: string }[] = [
  { platform: "instagram", label: "Instagram" },
  { platform: "facebook", label: "Facebook" },
  { platform: "twitter", label: "X (Twitter)" },
  { platform: "linkedin", label: "LinkedIn" },
  { platform: "youtube", label: "YouTube" },
];

/** Primary CTA: default darker burgundy; hover brand #7a011f (simple color swap). */
export const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#610018] font-bold text-white shadow-sm transition-colors duration-200 hover:bg-[#7a011f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a011f] disabled:pointer-events-none disabled:opacity-50";

/** Frosted glass surface used on the hero trust bar (use over a dark backdrop). */
export const frostedTrustSurfaceClass =
  "border-white/35 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-white/12";

/** Light frosted pill on the hero: matches marketing trust bar over the bus photo. */
export const heroTrustBarSurfaceClass =
  "border border-white/90 bg-gradient-to-t from-primary-100/55 via-white/65 to-white/75 shadow-[0_16px_48px_-12px_rgba(122,1,31,0.22)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:from-primary-100/45 supports-[backdrop-filter]:via-white/60 supports-[backdrop-filter]:to-white/72";

/** Same frosted treatment on light pink (footer, blush sections). */
export const frostedTrustSurfaceLightClass =
  "border-primary-100/90 bg-white/45 shadow-[0_8px_32px_rgba(122,1,31,0.08)] backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-white/55";

