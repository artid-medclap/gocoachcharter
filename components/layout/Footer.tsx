import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { FooterCtaGate } from "@/components/layout/FooterCtaGate";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/shared/SocialIcons";
import {
  contactPhone,
  footerLocations,
  footerQuickLinks,
  homeSections,
} from "@/data/navigation";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  FOOTER_SOCIAL,
  SITE_NAME,
  SOCIAL_LINKS,
  type SocialPlatform,
} from "@/lib/constants";
import { sectionTitleCompactClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

/** Same blush as services, reviews, amenities, and partner strip */
const footerSurfaceClass = "bg-surface-blush";

const footerLinkClass =
  "text-sm text-body-text underline decoration-primary-200 underline-offset-2 transition-colors hover:text-[#7a011f] hover:decoration-primary-400";

const socialIconClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-primary-200/90 bg-white text-primary-900 shadow-sm transition-colors hover:bg-primary-50";

const SOCIAL_ICONS: Record<
  SocialPlatform,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: XIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

function FooterLinkColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3
        className={cn(
          sectionTitleCompactClass,
          "!text-lg !font-semibold !text-primary-950 sm:!text-xl"
        )}
      >
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className={footerLinkClass}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <FooterCtaGate />
      <footer
        className={cn(
          "relative w-full border-t border-primary-100 text-foreground",
          footerSurfaceClass
        )}
        aria-label="Site footer"
      >
        <Container
          className="grid gap-10 py-12 max-sm:!pl-10 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.15fr_0.95fr_0.95fr_1.25fr] lg:gap-10 xl:gap-12"
        >
          <div>
            <Link href={homeSections.top} className="inline-flex">
              <Logo className="h-9 w-auto" linked={false} />
            </Link>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm font-bold text-primary-950">Address</p>
                <a
                  href={CONTACT_ADDRESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-1.5 block max-w-xs ${footerLinkClass}`}
                >
                  {CONTACT_ADDRESS.line}
                </a>
              </div>
              <div>
                <p className="text-sm font-bold text-primary-950">Phone</p>
                <a
                  href={contactPhone.href}
                  className={`mt-1.5 block ${footerLinkClass}`}
                >
                  {contactPhone.label}
                </a>
              </div>
              <div>
                <p className="text-sm font-bold text-primary-950">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className={`mt-1.5 block break-all ${footerLinkClass}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {FOOTER_SOCIAL.map(({ platform, label }) => {
                const Icon = SOCIAL_ICONS[platform];
                return (
                  <Link
                    key={platform}
                    href={SOCIAL_LINKS[platform]}
                    aria-label={label}
                    className={socialIconClass}
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={3} />
                  </Link>
                );
              })}
            </div>
          </div>

          <FooterLinkColumn title="Quick Links" items={footerQuickLinks} />
          <FooterLinkColumn title="Locations" items={footerLocations} />

          <div className="md:col-span-2 lg:col-span-1">
            <div
              className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-[0_8px_28px_rgba(53,0,20,0.06)]"
            >
              <iframe
                title="Go Coach Charters on Google Maps"
                src={CONTACT_ADDRESS.embedUrl}
                className="min-h-[260px] w-full border-0 sm:min-h-[300px] lg:min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={CONTACT_ADDRESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs font-medium text-muted-foreground underline underline-offset-2 hover:text-[#7a011f]"
            >
              Open in Maps
            </a>
          </div>
        </Container>

        <div
          className={cn(
            "border-t border-primary-100 py-6",
            footerSurfaceClass
          )}
        >
          <Container
            className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row"
          >
            <p>
              &copy; {year} {SITE_NAME} Charters. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href={homeSections.policies}
                className="transition-colors hover:text-[#7a011f] hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href={homeSections.policies}
                className="transition-colors hover:text-[#7a011f] hover:underline"
              >
                Terms of Service
              </Link>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
}
