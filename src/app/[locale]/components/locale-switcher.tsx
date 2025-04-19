// src/app/[locale]/components/LocaleSwitcher.tsx
import LocaleToggleButton from "./LocaleToggleButton"; // Import the new component

export default function LocaleSwitcher() {
  // You could pass an optional base label here if needed:
  // return <LocaleToggleButton label="Change interface language" />;
  return <LocaleToggleButton />;
}