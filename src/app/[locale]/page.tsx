// src/pages/Home.tsx (or src/components/Home.tsx, depending on your routing setup)

import React from 'react';
import HeroSection from './components/hero';
import VisionMission from './components/VisionMission';
import { ValuesSection } from './components/ValuesSection';
import OurCustomers from './components/OurCustomers';
import { OurServices } from './components/OurServices';
import { MorphoSCTHighlights } from './components/MorphoSCTHighlights';



const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <VisionMission />
      <ValuesSection />
      <OurCustomers />
      <OurServices />
      <MorphoSCTHighlights />
    </div>
  );
};

export default Home;