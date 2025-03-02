import HeroSection from '@/app/[locale]/components/hero'
import ECommerce from '@/app/[locale]/components/services/E-Commerce'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <ECommerce />
    </div>
  )
}

export default page