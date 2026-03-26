'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/i18n/language-context'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneCall, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const slides = [
  { id: 'software', img: '/images/banner-software.png' },
  { id: 'web', img: '/images/banner-web.png' },
  { id: 'mobile', img: '/images/banner-mobile.png' },
  { id: 'it', img: '/images/banner-it.png' },
  { id: 'bot', img: '/images/banner-bot.png' },
]

export default function Hero() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)

  // በራሱ እንዲንቀሳቀስ (Autoplay)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      
      {/* 1. ሙሉ ስፋት ያለው ባነር (እንደ appdiv.com) */}
      <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] bg-neutral-100 dark:bg-neutral-900 overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div 
            key={current} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 1 }} 
            className="absolute inset-0"
          >
            <Image 
              src={slides[current].img} 
              alt="Sofi Banner" 
              fill 
              className="object-cover" 
              priority
            />
            {/* የላይኛው እና የታችኛው gradient ጥላ (Overlay) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* የዳሰሳ አዝራሮች (Navigation Arrows) - በ group-hover ብቻ የሚታዩ */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 backdrop-blur-sm text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/50"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 backdrop-blur-sm text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/50"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* 2. ከባነሩ ስር የሚከተለው ጽሑፍ (OUR SERVICES) */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-sky-600 block mb-3 italic">OUR SERVICES</span>
            <span className="text-neutral-900 dark:text-white text-3xl md:text-5xl font-bold">
              {t('hero.title_bottom')}
            </span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/20">
              <Link href="tel:+251947359547" className="flex items-center gap-2">
                <PhoneCall size={18} /> {t('hero.cta1')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-2 border-sky-200 text-sky-700 dark:text-sky-400">
              <Link href="#about" className="flex items-center gap-2">
                {t('hero.cta2')} <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}