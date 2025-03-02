import HeroSection from '@/app/[locale]/components/hero'
import MobileAppDevelopment from '@/app/[locale]/components/services/MobileAppDevelopment'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <MobileAppDevelopment />
    </div>
  )
}

export default page