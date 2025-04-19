// src/i18n/routing.ts
import { defineRouting } from "next-intl/routing";
// Import from the root config file
import { i18n } from "../../i18n.config"; // Adjust path: ../../ goes up from src/i18n/ to root

export const routing = defineRouting({
  // Use the imported values
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
});
