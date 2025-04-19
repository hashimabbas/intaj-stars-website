// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
// Import the config directly for validation
import { i18n } from "../../i18n.config"; // Adjust path: ../../ goes up from src/i18n/ to root

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid using the central config
  if (!i18n.locales.includes(locale as any)) {
    notFound();
  }

  return {
    messages: (await import(`../../messages/${locale}.json`)).default, // Check this path too!
  };
});
