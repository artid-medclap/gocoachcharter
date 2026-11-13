"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { Logo } from "@/components/shared/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { contactPhone, homeSections, mainNav } from "@/data/navigation";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isHome: boolean;
  isOverlay: boolean;
}

export function Navbar({ isHome, isOverlay }: NavbarProps) {
  const pathname = usePathname();
  const { isOpen, toggle, close } = useMobileMenu();
  const isOverlayHeader = isHome && isOverlay;
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={cn(
        "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        isHome
          ? isOverlay && !isOpen
            ? "bg-transparent shadow-none"
            : isOverlayHeader
              ? "bg-primary-800 shadow-[0_4px_24px_rgba(53,0,20,0.2)]"
              : "bg-white/20 shadow-[0_4px_24px_rgba(53,0,20,0.08)] backdrop-blur-xl"
          : "bg-white/95 shadow-[0_4px_24px_rgba(53,0,20,0.04)] backdrop-blur-md",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo inverted={isOverlayHeader} />

        <nav className="hidden items-center gap-8 lg:flex text-md">
          {mainNav.map((item) => {
            const active = pathname === item.href;

            if (item.children) {
              return (
                <div
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDropdown((prev) => !prev)}
                    className={cn(
                      "group/nav relative flex items-center gap-1 py-2 text-md font-medium transition-colors",
                      active || openDropdown
                        ? isOverlayHeader
                          ? "text-white"
                          : "text-primary-600"
                        : isOverlayHeader
                          ? "text-white/90 hover:text-white"
                          : "text-foreground hover:text-primary-600",
                    )}
                    aria-expanded={openDropdown}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        openDropdown && "rotate-180"
                      )}
                    />
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300",
                        isOverlayHeader ? "bg-white" : "bg-primary-600",
                        active || openDropdown ? "w-full" : "w-0 group-hover/nav:w-full",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 transition-all duration-200 ease-out",
                      openDropdown
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    )}
                  >
                    <div className="overflow-hidden rounded-2xl  bg-background p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpenDropdown(false)}
                          className="group/item flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary-50 hover:text-primary-700"
                        >
                          {child.label}
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:text-primary-600 group-hover/item:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group/nav relative py-2 text-md font-medium transition-colors",
                  active
                    ? isOverlayHeader
                      ? "text-white"
                      : "text-primary-600"
                    : isOverlayHeader
                      ? "text-white/90 hover:text-white"
                      : "text-foreground hover:text-primary-600",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300",
                    isOverlayHeader ? "bg-white" : "bg-primary-600",
                    active ? "w-full" : "w-0 group-hover/nav:w-full",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={contactPhone.href}
            className={cn(
              "flex items-center gap-2 text-md font-semibold transition-colors",
              isOverlayHeader ? "text-white hover:text-white/80" : "text-foreground hover:text-primary-600",
            )}
          >
            <Phone className="h-4 w-4" />
            {contactPhone.label}
          </a>

          <Button
            href={homeSections.getStarted}
            size="sm"
            className={cn(
              "border border-transparent hover:!border-[#610018] hover:!bg-white hover:!text-[#610018]",
              isOverlayHeader && "!border-white !bg-white !text-[#610018] hover:!border-white hover:!bg-white/90",
            )}
          >
            Get A Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={toggle}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden",
            isOverlayHeader ? "border-white/60 text-white" : "border-border text-foreground",
          )}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <MobileMenu isOpen={isOpen} onClose={close} />
    </div>
  );
}
