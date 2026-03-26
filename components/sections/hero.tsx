'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/i18n/language-context'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneCall, ArrowRight } from 'lucide-react'
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center bg-sky-50/30 dark:bg-neutral-950 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* ግራ በኩል ያለው ጽሑፍ */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }}
          className="text-center lg:text-left"
        >
          <div className="mb-8 flex justify-center lg:justify-start">
            <Image src="/images/logo.png" alt="Sofi Logo" width={220} height={70} className="object-contain" priority />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-sky-600 block mb-2 italic">Sofi System Solution</span>
            <span className="text-neutral-900 dark:text-white text-3xl md:text-5xl font-bold">
              {t('hero.title_bottom')}
            </span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
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

        {/* ቀኝ በኩል ያለው ምስል (አሁን ስልክ ላይም ይታያል) */}
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] mt-8 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current} 
              initial={{ opacity: 0, scale: 0.9, x: 20 }} 
              animate={{ opacity: 1, scale: 1, x: 0 }} 
              exit={{ opacity: 0, scale: 0.9, x: -20 }} 
              transition={{ duration: 0.8 }} 
              className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white dark:border-neutral-900"
            >
              <Image 
                src={slides[current].img} 
                alt="Sofi Banner" 
                fill 
                className="object-cover" 
                priority
              />
              {/* ምስሉ ላይ ትንሽ ጥላ (Overlay) እንዲኖረው ካስፈለገ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}