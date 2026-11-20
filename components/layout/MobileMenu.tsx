"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { contactPhone, homeSections, mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div
      data-mobile-menu
      className={cn(
        "fixed inset-x-0 top-16 z-50 h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-b border-border bg-white transition-[max-height] duration-300 ease-in-out lg:hidden",
        isOpen ? "max-h-[calc(100dvh-4rem)]" : "max-h-0"
      )}
    >
      <nav className="flex flex-col px-4 py-4">
        {/* Nav Items with decreased icons */}
        <div className="flex flex-col divide-y divide-border/40">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="py-0.5">
                <button
                  type="button"
                  onClick={() => setOpenDropdown((prev) => !prev)}
                  className="flex min-h-11 w-full items-center justify-between px-2 text-sm sm:text-base font-semibold text-foreground"
                  aria-expanded={openDropdown}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={cn(
                      "h-3.5 w-3.5 text-muted-foreground transition-transform duration-200",
                      openDropdown && "rotate-90"
                    )}
                  />
                </button>

                {openDropdown && (
                  <div className="my-1 ml-2 flex flex-col border-l border-border/80 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={onClose}
                        className="py-1.5 px-2 text-xs sm:text-sm text-foreground/80 hover:text-primary-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div key={item.label} className="py-0.5">
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="flex min-h-11 items-center justify-between px-2 text-sm sm:text-base font-semibold text-foreground"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
                </Link>
              </div>
            )
          )}
        </div>

        {/* Get A Quote button with nav items (not pushed to bottom) */}
        <div className="mt-5">
          <Button
            href={homeSections.getStarted}
            size="sm"
            className="h-11 w-full rounded-full bg-[#610018] font-bold text-white shadow-sm transition-colors hover:bg-[#7a011f]"
            onClick={onClose}
          >
            Get A Quote
          </Button>
        </div>
      </nav>
    </div>
  );
}
