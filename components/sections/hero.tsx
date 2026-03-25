'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/i18n/language-context'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneCall, ArrowRight } from 'lucide-react'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-neutral-950 pt-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Sofi System Solution - ከላይ */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
            <span className="text-primary-600 block mb-2">
              Sofi System Solution
            </span>
            {/* የዲጂታል ጉዞዎ መጀመሪያ! - ከታች */}
            <span className="text-neutral-900 dark:text-white text-3xl md:text-5xl font-bold italic">
              {t('hero.title_bottom')}
            </span>
          </h1>
          
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mb-10 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Get Free Consultation - ሲነካ ወደ ስልክ መደወያ */}
            <Button asChild size="lg" className="rounded-full px-8 bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/20">
              <Link href="tel:+251947359547" className="flex items-center gap-2">
                <PhoneCall size={18} />
                {t('hero.cta1')}
              </Link>
            </Button>
            
            {/* Learn More - ወደ About ይወስዳል */}
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-2">
              <Link href="#about" className="flex items-center gap-2">
                {t('hero.cta2')}
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* ምስል */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-neutral-900">
            <Image 
              src="/hero-bg.jpg" // እዚህ ጋር ምስልህ መኖሩን አረጋግጥ
              alt="Sofi System Solution"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}