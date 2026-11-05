"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Armchair,
  Bath,
  Luggage,
  Snowflake,
  Usb,
  Users,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";

import type { FleetAmenityId, FleetVehicle } from "@/data/fleet";
import { sectionCardTitleClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

const AMENITY_META: Record<FleetAmenityId, { icon: LucideIcon; label: string }> = {
  climate: { icon: Snowflake, label: "Climate Control" },
  restroom: { icon: Bath, label: "Onboard Restroom" },
  overhead: { icon: Luggage, label: "Overhead Storage" },
  wifi: { icon: Wifi, label: "Wi-Fi" },
  outlets: { icon: Zap, label: "110 Power Outlets" },
  recline: { icon: Armchair, label: "Reclining Seats" },
  usb: { icon: Usb, label: "USB Port" },
};

type FleetVehicleCardProps = {
  vehicle: FleetVehicle;
};

export function FleetVehicleCard({ vehicle }: FleetVehicleCardProps) {
  const slides = [
    { src: vehicle.image, alt: vehicle.imageAlt },
    ...vehicle.gallery,
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [paused, slides.length, activeIndex]);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-[0_12px_36px_rgba(53,0,20,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_22px_50px_rgba(53,0,20,0.12)]">
      <div className="p-3 pb-0 sm:p-4 sm:pb-0">
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-xl bg-primary-50"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={`${slide.src}-${index}`} className="relative h-full min-w-full">
                <Image
                  src={slide.src}
                  alt={index === activeIndex ? slide.alt : ""}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2.5 grid h-12 grid-cols-4 gap-2 sm:h-14">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={`${slide.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${slide.alt}`}
                aria-pressed={isActive}
                className={cn(
                  "relative overflow-hidden rounded-xl border bg-primary-50 transition-all",
                  isActive
                    ? "border-primary-900 ring-2 ring-primary-900/15"
                    : "border-transparent",
                )}
              >
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  sizes="90px"
                  className={cn(
                    "object-cover object-center transition-[filter] duration-300",
                    !isActive && "scale-105 blur-[2px]",
                  )}
                />
                {!isActive ? (
                  <span
                    className="absolute inset-0 bg-white/55 backdrop-blur-[1px]"
                    aria-hidden
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pt-6">
        <div className="min-h-[4.25rem] text-center">
          <h3 className={sectionCardTitleClass}>{vehicle.name}</h3>
          <div className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-medium text-primary-800">
            <Users className="h-4 w-4" aria-hidden />
            {vehicle.capacity}
          </div>
        </div>

        <p className=" flex  justify-center mt-5 text-sm font-semibold text-primary-950">Amenities</p>
        <ul className="mt-3 grid min-h-[5.5rem] flex-1 grid-cols-2 content-start gap-x-3 gap-y-2.5">
          {vehicle.amenities.map((id) => {
            const amenity = AMENITY_META[id];
            const Icon = amenity.icon;
            return (
              <li
                key={id}
                className="flex items-center gap-2 text-[0.8125rem] leading-snug text-primary-950/85"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary-800" aria-hidden />
                {amenity.label}
              </li>
            );
          })}
        </ul>

        <Link
          href="/booking"
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#141414] px-6 text-sm font-bold text-white transition-colors hover:bg-primary-900"
        >
          Book Now
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
