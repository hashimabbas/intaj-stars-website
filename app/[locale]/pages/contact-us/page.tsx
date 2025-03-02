// src/app/page.tsx

import ContactUs from "../../components/ContactUs";
import HeroSection from "../../components/hero";


export default function page() {
  return (
    <div>
      <HeroSection />
      <ContactUs />
    </div>
  );
}