import "server-only";
import type { Locale } from "@/i18n.config";

// Define the type for the dictionary loading functions
type Dictionary = {
  navigation: { home: string; dashboard: string };
  page: {
    home: { title: string; description: string };
    dashboard: { title: string; description: string };
  };
  auth: { signin: string; signout: string };
};

type DictionaryLoader = () => Promise<Dictionary>;

const dictionaries: { [key in Locale]: DictionaryLoader } = {
  en: async () => (await import("@/dictionaries/en.json")).default,
  ar: async () => (await import("@/dictionaries/ar.json")).default,
};

export const getDictionary = async (locale: Locale) => {
  const dictionaryLoader = dictionaries[locale];

  if (!dictionaryLoader) {
    // Handle the case where a dictionary for the given locale is not found
    throw new Error(`No dictionary found for locale: ${locale}`);
  }

  return await dictionaryLoader();
};
