import type { Metadata } from "next";

import { GalleryExperience } from "@/components/gallery/GalleryExperience";

export const metadata: Metadata = {
  title: "Gallery | Fleet, Interiors & Amenities",
  description:
    "Browse Go Coach Charters photos: luxury coaches, mini buses, cabin interiors, and onboard amenities for group travel across Alberta.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Go Coach Charters Gallery",
    description:
      "See our charter buses, interiors, and amenities before you book group travel in Alberta.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryExperience />;
}
