import type { Metadata } from "next";

import { BlogPageView } from "@/components/blog/BlogPageView";

export const metadata: Metadata = {
  title: "Blog | Travel Tips & Charter Guides",
  description:
    "Explore Alberta travel ideas, event planning tips, and group charter guides from Go Coach Charters. Stories for corporate trips, schools, tours, and more.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Go Coach Charters Blog",
    description:
      "Travel ideas and group charter insights for Alberta, events, destinations, and planning guides.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return <BlogPageView />;
}
