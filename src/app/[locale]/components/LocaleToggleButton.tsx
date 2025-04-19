// src/app/[locale]/components/LocaleToggleButton.tsx
"use client";

import { cn } from "@/lib/utils";
// Import useRouter and usePathname from next-intl navigation
import { usePathname, useRouter } from "@/src/i18n/navigation"; // Adjust path if needed
// Import useParams from next/navigation
import { useParams } from "next/navigation"; // <--- CHANGE THIS LINE
import React, { useTransition } from "react";
import Image from "next/image";
import { i18n } from "@/i18n.config";
import { Button } from "@/components/ui/button";

// Mapping from locale code to flag information
const flagMap: Record<string, { src: string; alt: string }> = {
  en: { src: "/flags/gb.svg", alt: "Switch to English" },
  ar: { src: "/flags/om.svg", alt: "Switch to Arabic" },
};

type Props = {
  label?: string;
};

export default function LocaleToggleButton({ label }: Props) {
  const router = useRouter(); // from next-intl/navigation
  const pathname = usePathname(); // from next-intl/navigation
  const params = useParams();   // from next/navigation
  const [isPending, startTransition] = useTransition();

  // Use params from next/navigation (which might be null initially)
  const currentLocale = (params?.locale as string) || i18n.defaultLocale;
  const targetLocale = currentLocale === "en" ? "ar" : "en";
  const flagToDisplay = flagMap[targetLocale];

  function handleToggle() {
    if (isPending) return;

    startTransition(() => {
      // pathname from next-intl/navigation is locale-prefix-free
      router.replace(pathname, { locale: targetLocale });
    });
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      disabled={isPending}
      aria-label={label || flagToDisplay?.alt || `Switch Language`}
      className={cn(
        "h-9 w-9 rounded-full",
        "p-0"
      )}
    >
      {flagToDisplay ? (
        <Image
          src={flagToDisplay.src}
          alt={flagToDisplay.alt}
          width={24}
          height={18}
          className="rounded-sm"
        />
      ) : (
        <span className="text-xs font-bold uppercase">{targetLocale}</span>
      )}
    </Button>
  );
}