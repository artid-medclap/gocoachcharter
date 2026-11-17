"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Phone } from "lucide-react";
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
      className={cn(
        "fixed inset-x-0 top-16 z-50 h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-b border-border bg-background transition-[max-height] duration-300 ease-in-out lg:hidden",
        isOpen ? "max-h-[calc(100dvh-4rem)]" : "max-h-0"
      )}
    >
      <nav className="flex min-h-full flex-col px-4 py-5">
        {mainNav.map((item) =>
          item.children ? (
            <div key={item.label}>
              <button
                type="button"
                onClick={() => setOpenDropdown((prev) => !prev)}
                className="flex min-h-14 w-full items-center justify-between px-3 text-lg font-bold text-foreground"
                aria-expanded={openDropdown}
              >
                {item.label}
                <ChevronRight
                  className={cn("h-5 w-5 transition-transform", openDropdown && "rotate-90")}
                />
              </button>

              {openDropdown && (
                <div className="ml-3 flex flex-col border-l border-border pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={onClose}
                      className="px-3 py-2.5 text-sm text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex min-h-14 items-center justify-between px-3 text-lg font-bold text-foreground"
            >
              {item.label}
              <ChevronRight className="h-5 w-5" aria-hidden />
            </Link>
          )
        )}

        <div className="mt-auto">
          <a
            href={contactPhone.href}
            onClick={onClose}
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-surface-muted"
          >
            <Phone className="h-4 w-4" />
            {contactPhone.label}
          </a>

          <Button
            href={homeSections.getStarted}
            className="mt-2 w-full"
            onClick={onClose}
          >
            Get A Quote
          </Button>
        </div>
      </nav>
    </div>
  );
}
