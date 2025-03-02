'use client';
import React from 'react'
import { HeroParticle } from './HeroParticle'
import { TextAnimate } from '@/components/magicui/text-animate'
import { motion } from "framer-motion";
import { ShinyButton } from '@/components/magicui/shiny-button';
import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='relative h-screen'>
      <div className='absolute top-0 w-full h-screen z-10 flex items-center justify-center flex-col space-y-5'>
        <Image
          src="/business-management.png"
          alt="Laptop and Notebook"
          className="rounded-2xl shadow-xl object-cover"
          height={400} // Increased height
          width={600} // Increased width
          priority
          style={{ objectFit: 'cover' }}
        />
        <h1 className='text-3xl'>
          <TextAnimate animation="blurInUp" by="character" once>
            Intaj Stars Technology.Inc
          </TextAnimate>
        </h1>
        <motion.p className='text-xl text-gray-400 xl:w-[40rem] text-center'
          initial={{ opacity: 0, y: 5, }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Driving progress through cutting-edge technology.
        </motion.p>
        {/* <p> We specialize in developing and deploying robust medical systems, e-commerce platforms, and accounting solutions to fuel growth for our clients.</p> */}
        <motion.div
          initial={{ opacity: 0, y: 5, }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}>
          <ShinyButton>Contact Us</ShinyButton>
        </motion.div>
      </div>
      <HeroParticle />

      <div className='absolute bottom-0 w-full'>
        <Marquee pauseOnHover
          className='[--duration:20s] max-w-7xl mx-auto'>
          <h1>Specilet Meical Softwear</h1>
          <h1>Medical Device integration</h1>
          <h1>Analytic platform</h1>
          <h1> Ai softwear</h1>
          <h1> ERP System</h1>
          <h1> Payment solutions</h1>
          <h1> Chat bot</h1>
          <h1> Mobile App</h1>
          <h1> Ecommrce store</h1>
          <h1> Customer support Software</h1>
          <h1> POS Hardwaer And Softwear</h1>
        </Marquee>
      </div>
    </div>
  )
}

export default HeroSection