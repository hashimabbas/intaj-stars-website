// src/pages/Home.tsx (or src/components/Home.tsx, depending on your routing setup)

import React from 'react';
import HeroSection from './components/hero';
import VisionMission from './components/VisionMission';
import { ValuesSection } from './components/ValuesSection';
import OurCustomers from './components/OurCustomers';
import { OurServices } from './components/OurServices';



const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <VisionMission />
      <ValuesSection />
      <OurCustomers />
      <OurServices />
    </div>
  );
};

export default Home;