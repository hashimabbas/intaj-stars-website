'use client';
import React from 'react'
import { HeroParticle } from './HeroParticle'
import { TextAnimate } from '@/components/magicui/text-animate'
import { motion } from "framer-motion";
import { ShinyButton } from '@/components/magicui/shiny-button';
import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation'; // Correct import

const HeroSection = () => {
  const t = useTranslations('heroSection'); // Changed namespace to 'heroSection'
  const router = useRouter();
  const locale = useLocale();

  return (
    <div className='relative h-screen'>
      <div className='absolute top-0 w-full h-screen z-10 flex items-center justify-center flex-col space-y-5'>
        <Image
          src="/header.png"
          alt="Laptop and Notebook"
          className="rounded-2xl shadow-xl object-cover"
          height={240} // Increased height
          width={240} // Increased width
          priority
          style={{ objectFit: 'cover' }}
        />
        <h1 className='text-3xl'>
          {locale === "ar" ?
            t('title')
            : <TextAnimate animation="blurInUp" once>
              {t('title')}
            </TextAnimate>}

        </h1>
        <motion.p className='text-xl text-gray-400 xl:w-[40rem] text-center'
          initial={{ opacity: 0, y: 5, }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {t('subtitle')}
        </motion.p>
        {/* <p> We specialize in developing and deploying robust medical systems, e-commerce platforms, and accounting solutions to fuel growth for our clients.</p> */}
        <motion.div
          initial={{ opacity: 0, y: 5, }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}>
          <a href='https://wa.me/96893534933' target='_blank' >
            <ShinyButton>{t('contactButton')}</ShinyButton>
          </a>
        </motion.div>
      </div>
      <HeroParticle />


    </div>
  )
}

export default HeroSection