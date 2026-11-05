"use client";

import { usePathname } from "next/navigation";

import { FinalCtaSection } from "@/components/home/FinalCtaSection";

/** Site-wide CTA band: omitted on `/blog` (blog layout renders its own). */
export function FooterCtaGate() {
  const pathname = usePathname();
  if (pathname?.startsWith("/blog")) return null;
  return <FinalCtaSection />;
}
