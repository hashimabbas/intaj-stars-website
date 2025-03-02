import HeroSection from '@/app/[locale]/components/hero'
import WebDevelopment from '@/app/[locale]/components/services/WebDevelopment'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <WebDevelopment />
    </div>
  )
}

export default page