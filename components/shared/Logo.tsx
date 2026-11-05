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

export function Logo({ className, inverted = false, linked = true }: LogoProps) {
  const image = (
    <Image
      src={inverted ? siteMedia.brand.logoOnDark : siteMedia.brand.logo}
      height={200}
      width={200}
      alt="GoCoach Charters"
      className={cn("h-12 w-auto object-contain", className)}
    />
  );

  const wrapperClass = cn(
    "flex items-center gap-3 text-lg font-bold tracking-tight",
    inverted ? "text-white" : "text-foreground"
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
