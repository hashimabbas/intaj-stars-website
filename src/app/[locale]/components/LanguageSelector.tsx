"use client";

import { cn } from "@/lib/utils";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition, useState, useEffect } from "react";
import Image from "next/image"; // Import next/image
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  // SelectValue, // We won't use SelectValue directly for rendering the trigger content
} from "@/components/ui/select";
// We can remove FaLanguage if we only show flags
// import { FaLanguage } from "react-icons/fa";

type Props = {
  defaultValue: string;
  label?: string; // making it optional
  supportedLocales: string[];
};

// Define a mapping from locale code to flag information
const flagMap: Record<string, { src: string; alt: string }> = {
  en: { src: "/flags/gb.svg", alt: "British Flag" }, // Adjust path if needed
  ar: { src: "/flags/om.svg", alt: "Oman Flag" },    // Adjust path if needed
};


export default function LocaleSwitcherSelect({
  defaultValue,
  label,
  supportedLocales,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const { locale } = useParams(); // locale is string | string[] | undefined

  // Ensure currentLocale is always a string or default locale
  const [currentLocale, setCurrentLocale] = useState<string>(
    (Array.isArray(locale) ? locale[0] : locale) || defaultValue // Handle array/undefined case
  );

  useEffect(() => {
    // Update state if the route locale changes
    const validLocale = (Array.isArray(locale) ? locale[0] : locale);
    if (validLocale && supportedLocales.includes(validLocale)) {
      setCurrentLocale(validLocale);
    } else {
      setCurrentLocale(defaultValue); // Fallback to default if invalid
    }
  }, [locale, supportedLocales, defaultValue]);


  // Simplified handler using the value directly from onValueChange
  function handleLocaleChange(nextLocale: string) {
    if (!supportedLocales.includes(nextLocale)) {
      console.error(`Invalid locale selected ${nextLocale}`);
      return;
    }

    startTransition(() => {
      const segments = pathname.split('/').filter(Boolean);
      let nextPath = '';
      // Check if the first segment is a known locale and replace it
      if (segments.length > 0 && supportedLocales.includes(segments[0])) {
        nextPath = `/${nextLocale}/${segments.slice(1).join('/')}`;
      } else {
        // Otherwise, prepend the new locale to the existing path
        nextPath = `/${nextLocale}${pathname === '/' ? '' : pathname}`; // Avoid double slash at root
      }

      // Handle potential empty path after replacing locale for root
      if (nextPath === `/${nextLocale}/`) {
        nextPath = `/${nextLocale}`;
      }


      router.replace(nextPath);
      // No need to call setCurrentLocale here, useEffect will handle it when params.locale changes
    });
  }

  // Get the flag data for the currently selected locale
  const currentFlag = flagMap[currentLocale];

  return (
    <Select
      onValueChange={handleLocaleChange} // Use the simplified handler
      value={currentLocale}
      disabled={isPending}
      aria-label={label || "Select Language"}
    >
      <SelectTrigger
        className={cn(
          "flex h-9 w-auto items-center justify-center rounded-md border-none bg-transparent px-2 py-2 text-sm", // Centered content, adjust padding as needed
          "shadow-none",
          "ring-offset-background placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-0 focus:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "hover:bg-accent hover:text-accent-foreground",
          "gap-1.5"
        )}
        aria-label={label || "Select Language"}
      >
        {/* Display Current Flag in Trigger */}
        {currentFlag ? (
          <Image
            src={currentFlag.src}
            alt={currentFlag.alt}
            width={24} // Adjust size as needed
            height={18} // Adjust size based on aspect ratio
            className="rounded-sm" // Optional: slightly rounded corners for the flag
          />
        ) : (
          // Fallback if flag isn't found (shouldn't happen with validation)
          <span className="uppercase">{currentLocale}</span>
        )}
        {/* Shadcn's chevron down icon will still appear */}
      </SelectTrigger>
      <SelectContent align="end" className="min-w-[6rem]"> {/* Adjust min-width */}
        <SelectGroup>
          {supportedLocales.map((loc) => {
            const flag = flagMap[loc]; // Get flag for the option
            return (
              <SelectItem key={loc} value={loc}>
                <div className="flex items-center gap-2">
                  {/* Display Flag in Option */}
                  {flag ? (
                    <Image
                      src={flag.src}
                      alt={flag.alt}
                      width={20} // Slightly smaller in dropdown
                      height={15} // Adjust size based on aspect ratio
                      className="rounded-sm"
                    />
                  ) : null}
                  {/* Display Locale Code */}
                  <span className="font-medium">{loc.toUpperCase()}</span>
                </div>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}