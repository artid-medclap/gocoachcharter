import type { BlogArticleSection, BlogTocItem } from "@/types/blog";

export const blogArticleWhyChooseSection: BlogArticleSection = {
  id: "why-choose-go-coach-charters",
  title: "Why Choose Go Coach Charters for Group Transportation?",
  blocks: [
    {
      type: "paragraph",
      text:
        "Transportation for a large group needs reliable capacity, clear scheduling, and a team that understands Alberta routes. Go Coach Charters plans charters around your pickup points, stops, and return times, not the other way around.",
    },
    {
      type: "paragraph",
      text:
        "We support business travel, weddings, school trips, sports teams, tours, festivals, and more across Edmonton, Calgary, and provincial highways. Share your headcount and itinerary early so we can match the right coach from our fleet.",
    },
    {
      type: "paragraph",
      text:
        "When you are ready to book, request a quote with dates, passenger count, and any equipment or accessibility needs. We will walk you through vehicle options and pricing before you confirm.",
    },
  ],
};

export const blogArticleFaqSections: BlogArticleSection[] = [
  {
    id: "frequently-asked-questions",
    title: "Frequently Asked Questions",
    blocks: [
      {
        type: "paragraph",
        text:
          "Common questions about charter bus rentals in Alberta. Contact Go Coach Charters if you need help matching a vehicle to your trip.",
      },
    ],
  },
  {
    id: "faq-charter-bus-capacity",
    title: "How many people can travel on a charter bus?",
    blocks: [
      {
        type: "paragraph",
        text:
          "Capacity depends on the coach you book. Go Coach Charters offers vehicles from smaller mini coaches around 18 seats up to full-size motorcoaches that can carry roughly 50 to 56 passengers. There is no strict minimum group size for a charter, we can match a smaller group to a right-sized coach.",
      },
    ],
  },
  {
    id: "faq-estimate-details",
    title: "What details do I need to obtain an estimate for chartering a bus?",
    blocks: [
      {
        type: "paragraph",
        text:
          "For an accurate quote, share your travel dates, pickup and drop-off locations, approximate passenger count, and whether you need one-way, round-trip, or multi-day service. Include planned stops, departure and return times, and any special needs such as extra luggage or equipment.",
      },
    ],
  },
  {
    id: "faq-multiple-stops",
    title: "Does a charter bus offer multiple stops?",
    blocks: [
      {
        type: "paragraph",
        text:
          "Absolutely. Charters are built around your itinerary. Tell us your stops and timing when you request a quote and we'll build the route around it.",
      },
    ],
  },
  {
    id: "faq-charter-bus-cost",
    title: "What affects the cost of a charter bus rental?",
    blocks: [
      {
        type: "paragraph",
        text:
          "Pricing reflects vehicle size, total distance, hours on the road, travel dates, and whether your trip is local or overnight. Multi-stop routes, driver wait time, and parking or tolls where applicable may also factor in.",
      },
    ],
  },
  {
    id: "faq-multi-day-trip",
    title: "Can I book a charter bus for a multi-day trip?",
    blocks: [
      {
        type: "paragraph",
        text:
          "Yes, we support single-day, multi-day, and overnight charters across Alberta and beyond. Let us know your full itinerary and we'll quote the whole trip.",
      },
    ],
  },
];

export function buildBlogArticleToc(sections: BlogArticleSection[]): BlogTocItem[] {
  return sections.map((section) => ({
    id: section.id,
    label: section.title,
  }));
}
