import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { homeSections } from "@/data/navigation";
import { charterRoutes } from "@/data/charterRoutes";
import { primaryButtonClass } from "@/lib/constants";
import { homeSectionMeta } from "@/lib/home-sections";
import { cn } from "@/lib/utils";

const LOCATIONS = [
  { name: "Grande Prairie", latitude: 55.1707, longitude: -118.7887 },
  { name: "Jasper", latitude: 52.8734, longitude: -118.0814 },
  { name: "Fort McMurray", latitude: 56.7268, longitude: -111.381 },
  { name: "Edmonton", latitude: 53.5461, longitude: -113.4938 },
  { name: "Lloydminster", latitude: 53.278, longitude: -110.005 },
  { name: "Red Deer", latitude: 52.2681, longitude: -113.8112 },
  { name: "Banff", latitude: 51.1784, longitude: -115.5708 },
  { name: "Calgary", latitude: 51.0447, longitude: -114.0719 },
  { name: "Medicine Hat", latitude: 50.0417, longitude: -110.6775 },
  { name: "Lethbridge", latitude: 49.6956, longitude: -112.8451 },
] as const;

/*
 * Positions are intentionally tuned to the stylized
 * SVG Alberta shape so every marker stays inside the map.
 */
const MAP_MARKER_POSITIONS: Record<
  string,
  { left: number; top: number }
> = {
  "Grande Prairie": { left: 27, top: 28 },
  Jasper: { left: 35, top: 43 },
  "Fort McMurray": { left: 62, top: 29 },
  Edmonton: { left: 45, top: 47 },
  Lloydminster: { left: 68, top: 49 },
  "Red Deer": { left: 47, top: 61 },
  Banff: { left: 36, top: 71 },
  Calgary: { left: 50, top: 73 },
  "Medicine Hat": { left: 67, top: 83 },
  Lethbridge: { left: 54, top: 85 },
};

const MAP_MARKERS = LOCATIONS.map((location) => ({
  ...location,
  position: MAP_MARKER_POSITIONS[location.name],
}));

const MAP_ROUTES = [
  ["Edmonton", "Calgary"],
  ["Edmonton", "Jasper"],
  ["Calgary", "Banff"],
  ["Edmonton", "Fort McMurray"],
  ["Calgary", "Lethbridge"],
] as const;

function getRoutePath(from: string, to: string) {
  const start = MAP_MARKERS.find(
    (location) => location.name === from,
  );

  const end = MAP_MARKERS.find(
    (location) => location.name === to,
  );

  if (!start || !end) {
    return "";
  }

  const x1 = (start.position.left / 100) * 700;
  const y1 = (start.position.top / 100) * 525;

  const x2 = (end.position.left / 100) * 700;
  const y2 = (end.position.top / 100) * 525;

  const controlX = (x1 + x2) / 2;
  const controlY = Math.min(y1, y2) - 35;

  return `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;
}

export const featuredRoutesSection = homeSectionMeta.featuredRoutes;

export function FeaturedRoutesSection() {
  return (
    <HomeSection
      id={featuredRoutesSection.id}
      sectionName={featuredRoutesSection.name}
      tone="white"
      decorated
      className="hidden overflow-hidden border-b border-primary-100/90 lg:block"
    >
      <Container className="relative">
        <div
          className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12"
        >
          {/* LEFT CONTENT */}
          <div className="relative z-10 text-center lg:text-left">
            <SectionHeading
              align="left"
              className="mx-auto w-full text-center lg:mx-0 lg:text-left"
              headingClassName="text-center lg:text-left"
              title={
                <>
                  Charter Bus Service
                  <SectionTitleAccent>Across Canada</SectionTitleAccent>
                </>
              }
              description="Share your trip details with Go Coach Charters and book your charter bus now."
            />

            <div
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:items-start lg:justify-start"
            >
              <Link
                href={homeSections.getStarted}
                className={cn("group min-h-12 gap-2 px-6 text-sm", primaryButtonClass)}
              >
                Get a free quote

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* MAP */}
          <div
            className="relative mx-auto aspect-[4/3] w-full min-w-0 max-w-[760px]"
          >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 700 525"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-labelledby="western-canada-map-title western-canada-map-description"
              >
                <title id="western-canada-map-title">
                  Go Coach service locations across Alberta
                </title>

                <desc id="western-canada-map-description">
                  An illustrated map of Alberta showing Go Coach charter
                  service locations and featured travel routes.
                </desc>

                <defs>
                  <filter
                    id="province-shadow"
                    x="-10%"
                    y="-10%"
                    width="120%"
                    height="125%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="12"
                      stdDeviation="12"
                      floodColor="#350014"
                      floodOpacity=".2"
                    />
                  </filter>

                  <clipPath id="alberta-map-clip">
                    <path d="M52 34L254 79L286 103L470 137L669 157L663 501L470 486L350 464L278 447L225 415L185 376L156 333L130 290L108 245L88 204L70 164L59 126L63 94L48 67Z" />
                  </clipPath>
                  <clipPath id="map-canvas-clip">
                    <rect
                      x="28"
                      y="18"
                      width="644"
                      height="489"
                      rx="42"
                      ry="42"
                    />
                  </clipPath>
                </defs>

                <g clipPath="url(#map-canvas-clip)">
                <path
                  d="M52 34L254 79L286 103L470 137L669 157L663 501L470 486L350 464L278 447L225 415L185 376L156 333L130 290L108 245L88 204L70 164L59 126L63 94L48 67Z"
                  fill="#7a011f"
                  filter="url(#province-shadow)"
                  strokeLinejoin="round"
                />

                <g clipPath="url(#alberta-map-clip)">
                  <path
                    d="M52 34L254 79L286 103L470 137L669 157L663 501L470 486L350 464L278 447L225 415L185 376L156 333L130 290L108 245L88 204L70 164L59 126L63 94L48 67Z"
                    fill="#7a011f"
                    strokeLinejoin="round"
                  />

                  <g
                    fill="none"
                    stroke="#fff"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M286 103C279 139 270 176 261 214C252 253 243 292 232 331C222 369 211 407 199 443" />
                    <path d="M470 137C463 188 456 239 449 291C442 344 435 399 429 458C428 471 427 480 426 488" />
                  </g>

                  <g fill="none" stroke="#ffffff" strokeLinecap="round">
                    <path
                      d="M48 174C105 187 145 220 198 234C250 248 297 238 347 246C404 255 452 281 510 284C565 287 612 277 678 295"
                      strokeOpacity=".15"
                      strokeWidth="2"
                    />
                    <path
                      d="M67 230C122 238 159 270 211 282C265 295 305 284 357 296C409 308 449 333 500 337C554 341 610 326 673 347"
                      strokeOpacity=".13"
                      strokeWidth="2"
                    />
                    <path
                      d="M93 310C148 316 188 341 239 349C290 357 337 347 387 360C438 373 479 394 531 396C579 398 625 389 671 401"
                      strokeOpacity=".17"
                      strokeWidth="2"
                    />
                    <path
                      d="M120 372C171 378 208 397 258 405C309 413 350 404 396 416C444 428 486 445 535 445C580 445 621 436 667 450"
                      strokeOpacity=".12"
                      strokeWidth="2"
                    />
                    <path
                      d="M76 126C132 139 173 161 219 170C268 180 310 170 357 179C409 188 448 211 495 215C548 219 596 207 657 222"
                      strokeOpacity=".11"
                      strokeWidth="2"
                    />
                  </g>

                  <g
                    fill="none"
                    stroke="#e887a5"
                    strokeOpacity=".95"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="3 8"
                  >
                    {MAP_ROUTES.map(([from, to]) => {
                      const route = getRoutePath(from, to);

                      if (!route) return null;

                      return (
                        <path key={`${from}-${to}`} d={route} />
                      );
                    })}
                  </g>

                  <g
                    aria-hidden="true"
                    fill="#ffffff"
                    fontWeight="800"
                    paintOrder="stroke fill"
                    stroke="#3d0016"
                    strokeWidth="1.25"
                  >
                    <text
                      x="362"
                      y="302"
                      textAnchor="middle"
                      fillOpacity="0.42"
                      fontSize="26"
                      letterSpacing="7"
                    >
                      ALBERTA
                    </text>

                    <text
                      x="558"
                      y="302"
                      textAnchor="middle"
                      fillOpacity="0.46"
                      fontSize="13"
                      letterSpacing="3"
                      transform="rotate(90 558 302)"
                    >
                      SASKATCHEWAN
                    </text>

                    <text
                      fillOpacity="0.62"
                      fontSize="11"
                      fontWeight="700"
                      letterSpacing="0.25"
                      transform="translate(208 332) rotate(-38)"
                    >
                      <tspan x="0" dy="0" textAnchor="middle">
                        Rocky
                      </tspan>
                      <tspan x="0" dy="14" textAnchor="middle">
                        Mountains
                      </tspan>
                    </text>
                  </g>
                </g>
                </g>
              </svg>

              <nav aria-label="Go Coach locations in Alberta">
                {MAP_MARKERS.map((location) => (
                  <Link
                    key={location.name}
                    href={homeSections.getStarted}
                    aria-label={`Request a quote for travel near ${location.name}`}
                    className="group absolute z-20 flex -translate-x-1/2 -translate-y-[88%] flex-col items-center outline-none focus-visible:ring-4 focus-visible:ring-primary-300/50"
                    style={{
                      left: `${location.position.left}%`,
                      top: `${location.position.top}%`,
                    }}
                  >
                    <span className="pointer-events-none absolute bottom-0 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-primary-300/35 opacity-0 transition-all duration-200 group-hover:scale-150 group-hover:opacity-100 group-focus-visible:scale-150 group-focus-visible:opacity-100" />

                    <MapPin
                      className="relative h-7 w-7 fill-primary-300 text-primary-900 drop-shadow-[0_4px_10px_rgba(53,0,20,0.35)] transition-transform duration-200 group-hover:scale-110 group-focus-visible:scale-110 min-[400px]:h-8 min-[400px]:w-8 sm:h-10 sm:w-10"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />

                    <span className="pointer-events-none absolute bottom-[calc(100%+0.15rem)] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs font-bold text-primary-900 opacity-0 shadow-[0_6px_18px_rgba(53,0,20,0.18)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:-translate-y-0.5 group-focus-visible:opacity-100">
                      {location.name}
                    </span>
                  </Link>
                ))}
              </nav>
          </div>
        </div>

        <div className="sr-only">
          Featured charter corridors:{" "}
          {charterRoutes
            .map((route) => `${route.from} to ${route.to}`)
            .join(", ")}
          .
        </div>
      </Container>
    </HomeSection>
  );
}
