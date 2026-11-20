import Link from "next/link";
import Image from "next/image";
import { siteMedia } from "@/lib/site-media";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  inverted?: boolean;
  /** Set to false when the logo is already wrapped in a parent Link. */
  linked?: boolean;
}

export function Logo({ className, linked = true }: LogoProps) {
  const image = (
    <Image
      src={siteMedia.brand.logo}
      height={200}
      width={200}
      alt="GoCoach Charters"
      priority
      className={cn("h-8 sm:h-9 md:h-10 w-auto object-contain", className)}
    />
  );

  const wrapperClass = cn(
    "inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-2.5 py-1 sm:px-3 sm:py-1.5 shadow-xs transition-opacity hover:opacity-95"
  );

  if (!linked) {
    return <span className={wrapperClass}>{image}</span>;
  }

  return (
    <Link href="/#top" className={wrapperClass}>
      {image}
    </Link>
  );
}
