'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/language-context'
import { cn } from '@/lib/utils'
import { Button } from './button'

// ማሳሰቢያ፦ የፎልደሩ ስም 'layout' (በትንሽ) መሆኑን አረጋግጥ። 
// ካልሆነ 'Layout' (በካፒታል) አድርገህ ቀይረው።
import { LanguageSwitcher } from '../layout/language-switcher'
import { ThemeToggle } from '../layout/theme-toggle'

export function Navbar() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md h-16 border-neutral-200 dark:border-neutral-800 shadow-sm" 
          : "bg-white dark:bg-neutral-950 h-20 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        
        {/* ሎጎ እና ስም (Sofi System Solution) */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-105">
            <Image 
              src="/images/logo.png" 
              alt="Sofi Logo" 
              fill
              className="object-contain" 
              priority 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-2xl font-black text-sky-600 italic leading-none tracking-tight">
              Sofi System Solution
            </span>
            <span className="text-[10px] md:text-xs text-neutral-500 font-bold tracking-[0.2em] uppercase mt-1">
              Technology Excellence
            </span>
          </div>
        </Link>

        {/* ቀኝ በኩል ያሉት አማራጮች */}
        <div className="flex items-center gap-2 md:gap-6">
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold">
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