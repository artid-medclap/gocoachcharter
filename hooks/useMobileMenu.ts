"use client";

import { useCallback, useEffect, useState } from "react";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    if (!isOpen) return;

    const rootStyle = document.documentElement.style;
    const bodyStyle = document.body.style;
    const previousRootOverflow = rootStyle.overflow;
    const previousBodyOverflow = bodyStyle.overflow;
    const preventBackgroundScroll = (event: TouchEvent) => {
      if (
        !(event.target instanceof Element) ||
        !event.target.closest("[data-mobile-menu]")
      ) {
        event.preventDefault();
      }
    };

    rootStyle.overflow = "hidden";
    bodyStyle.overflow = "hidden";
    document.addEventListener("touchmove", preventBackgroundScroll, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchmove", preventBackgroundScroll);
      rootStyle.overflow = previousRootOverflow;
      bodyStyle.overflow = previousBodyOverflow;
    };
  }, [isOpen]);

  return { isOpen, open, close, toggle };
}
