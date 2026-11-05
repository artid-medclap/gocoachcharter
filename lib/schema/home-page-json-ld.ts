import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_URL,
} from "@/lib/constants";
import { siteMedia } from "@/lib/site-media";

/** Public brand name (matches marketing copy on the homepage). */
const BUSINESS_NAME = "Go Coach Charters";

const HOME_URL = `${SITE_URL}/`;
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${HOME_URL}#webpage`;

/** Shown in the reviews section: keep in sync with CustomerReviewsSection. */
const GOOGLE_AGGREGATE_RATING = {
  ratingValue: 4.9,
  reviewCount: 100,
  bestRating: 5,
  worstRating: 1,
} as const;

const HOME_PAGE_DESCRIPTION =
  "Book a licensed, insured charter bus for weddings, corporate events, school trips, and sports teams across Calgary, Edmonton, and Alberta.";

const CHARTER_SERVICES = [
  "Corporate travel charter bus rental",
  "School and college trip charter bus rental",
  "Sports team charter bus rental",
  "Wedding and event charter bus rental",
  "Church and religious group charter bus rental",
  "Senior group tour charter bus rental",
] as const;

const ALBERTA_SERVICE_AREAS = [
  "Edmonton",
  "Calgary",
  "Sherwood Park",
  "Red Deer",
  "Banff",
  "Jasper",
  "Fort McMurray",
  "Lethbridge",
  "Medicine Hat",
  "Alberta",
] as const;

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * JSON-LD @graph for the homepage only (Organization, WebSite, WebPage, services).
 * @see https://schema.org/docs/documents.html
 */
export function getHomePageJsonLd() {
  const logoUrl = absoluteUrl(siteMedia.brand.logo);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: BUSINESS_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        address: {
          "@type": "PostalAddress",
          streetAddress: "2016 Sherwood Dr",
          addressLocality: "Sherwood Park",
          addressRegion: "AB",
          postalCode: "T8A 3X3",
          addressCountry: "CA",
        },
        sameAs: [CONTACT_ADDRESS.mapsUrl],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: BUSINESS_NAME,
        image: logoUrl,
        url: SITE_URL,
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        description: HOME_PAGE_DESCRIPTION,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2016 Sherwood Dr",
          addressLocality: "Sherwood Park",
          addressRegion: "AB",
          postalCode: "T8A 3X3",
          addressCountry: "CA",
        },
        areaServed: ALBERTA_SERVICE_AREAS.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        parentOrganization: { "@id": ORG_ID },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: GOOGLE_AGGREGATE_RATING.ratingValue,
          reviewCount: GOOGLE_AGGREGATE_RATING.reviewCount,
          bestRating: GOOGLE_AGGREGATE_RATING.bestRating,
          worstRating: GOOGLE_AGGREGATE_RATING.worstRating,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Charter bus services",
          itemListElement: CHARTER_SERVICES.map((name, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name,
              provider: { "@id": ORG_ID },
              areaServed: {
                "@type": "State",
                name: "Alberta",
              },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: BUSINESS_NAME,
        description: HOME_PAGE_DESCRIPTION,
        publisher: { "@id": ORG_ID },
        inLanguage: "en-CA",
      },
      {
        "@type": "WebPage",
        "@id": WEBPAGE_ID,
        url: HOME_URL,
        name: "Charter Bus Rentals for Groups Across Alberta",
        description: HOME_PAGE_DESCRIPTION,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(siteMedia.home.heroPrevostLot),
        },
        inLanguage: "en-CA",
      },
    ],
  };
}
