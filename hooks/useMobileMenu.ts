"use client";

import { useCallback, useEffect, useState } from "react";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const rootStyle = document.documentElement.style;
    const bodyStyle = document.body.style;
    const previousRootOverflow = rootStyle.overflow;
    const previousRootScrollBehavior = rootStyle.scrollBehavior;
    const previousBodyStyles = {
      overflow: bodyStyle.overflow,
      position: bodyStyle.position,
      top: bodyStyle.top,
      width: bodyStyle.width,
    };

    rootStyle.overflow = "hidden";
    bodyStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.width = "100%";

    return () => {
      rootStyle.overflow = previousRootOverflow;
      bodyStyle.overflow = previousBodyStyles.overflow;
      bodyStyle.position = previousBodyStyles.position;
      bodyStyle.top = previousBodyStyles.top;
      bodyStyle.width = previousBodyStyles.width;
      rootStyle.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      rootStyle.scrollBehavior = previousRootScrollBehavior;
    };
  }, [isOpen]);

  return { isOpen, open, close, toggle };
}
