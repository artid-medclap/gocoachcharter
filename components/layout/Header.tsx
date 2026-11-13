"use client";

import { Navbar } from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

function subscribeToScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getIsScrolled() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    return window.scrollY > 0;
  }

  const secondSection = document.getElementById("commitment");
  return secondSection !== null && secondSection.getBoundingClientRect().top <= 64;
}

function getServerScrollSnapshot() {
  return false;
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isScrolled = useSyncExternalStore(
    subscribeToScroll,
    getIsScrolled,
    getServerScrollSnapshot,
  );

  return (
    <header className={cn("sticky top-0 z-50", isHome && "-mb-16")}>
      <Navbar isHome={isHome} isOverlay={isHome && !isScrolled} />
    </header>
  );
}