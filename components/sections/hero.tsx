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
  const { t, language } = useLanguage()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      
      {/* 1. ሙሉ ስፋት ያለው ስላይደር (Full-width Slider) */}
      <div className="relative w-full h-[45vh] md:h-[65vh] lg:h-[75vh] bg-neutral-100 dark:bg-neutral-900 overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div 
            key={current} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 1.2 }} 
            className="absolute inset-0"
          >
            <Image 
              src={slides[current].img} 
              alt="Sofi Banner" 
              fill 
              className="object-cover" 
              priority
            />
            {/* ለጽሑፉ እንዲመች መጠነኛ ጥላ (Overlay) */}
            <div className="absolute inset-0 bg-black/5 dark:bg-black/20 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows (በ group-hover ብቻ የሚታዩ) */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/40 backdrop-blur-md text-neutral-800 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/60">
          <ChevronLeft size={28} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/40 backdrop-blur-md text-neutral-800 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/60">
          <ChevronRight size={28} />
        </button>
      </div>

      {/* 2. ከባነሩ ስር የሚከተለው ጽሑፍ - በትልቁ እና በሚያምር ዲዛይን */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* ዋናው መሪ ቃል - በሚያምር ዲዛይን መሃል ላይ */}
          <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tight">
            <span className="text-sky-600 block mb-5 italic drop-shadow-md">
              {language === 'am' ? 'የዲጂታል ጉዞዎ መጀመሪያ!' : 'The Start of Your Digital Journey!'}
            </span>
          </h1>
          
          {/* ገላጭ ጽሑፍ (Description) - ከስሩ በሚያምር ሁኔታ */}
          <p className="text-xl md:text-3xl text-neutral-800 dark:text-neutral-200 max-w-5xl mx-auto mb-14 leading-relaxed font-semibold">
            ጥራቱን የጠበቀ ዌብሳይት፣ ሞባይል አፕ እና ዘመናዊ ሶፍትዌሮችን በማልማት የድርጅትዎን ስኬት እናፋጥናለን።
          </p>

          {/* አዝራሮች (Buttons) - ሰፋ እና ጠንከር ብለው */}
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" className="rounded-full px-14 h-16 text-xl bg-sky-600 hover:bg-sky-700 shadow-2xl shadow-sky-500/30 transition-all hover:-translate-y-1">
              <Link href="tel:+251947359547" className="flex items-center gap-3">
                <PhoneCall size={22} /> {t('hero.cta1')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-14 h-16 text-xl border-2 border-sky-200 text-sky-700 dark:text-sky-400 hover:bg-sky-50 transition-all hover:-translate-y-1">
              <Link href="#about" className="flex items-center gap-3">
                {t('hero.cta2')} <ArrowRight size={22} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}