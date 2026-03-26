'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/language-context'
import { Button } from './button' // በዛው ፎልደር ስለሆነ './' ይሆናል
import { LanguageSwitcher } from '../layout/language-switcher' // መንገዱን ቼክ አድርገው
import { ThemeToggle } from '../layout/theme-toggle' // መንገዱን ቼክ አድርገው

export function Navbar() {
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* ሎጎ እና ስም በአንድ ላይ */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image 
              src="/images/logo.png" 
              alt="Sofi Logo" 
              fill
              className="object-contain transition-transform group-hover:scale-110" 
              priority 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-2xl font-black text-sky-600 italic leading-none">
              Sofi System Solution
            </span>
            <span className="text-[10px] md:text-xs text-neutral-500 font-medium tracking-widest uppercase">
              Technology Excellence
            </span>
          </div>
        </Link>

        {/* ቀኝ በኩል ያሉት አማራጮች */}
        <div className="flex items-center gap-2 md:gap-6">
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
            <Link href="#services" className="text-neutral-600 dark:text-neutral-400 hover:text-sky-600 transition-colors">
              {t('nav.services')}
            </Link>
            <Link href="#about" className="text-neutral-600 dark:text-neutral-400 hover:text-sky-600 transition-colors">
              {t('nav.about')}
            </Link>
            <Link href="#contact" className="text-neutral-600 dark:text-neutral-400 hover:text-sky-600 transition-colors">
              {t('nav.contact')}
            </Link>
          </nav>
          
          <div className="flex items-center gap-2 pl-2 md:pl-4 border-l border-neutral-200 dark:border-neutral-800">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}