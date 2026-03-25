'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/language-context'
import { Menu, X, Globe, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './button'

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm border-b dark:border-neutral-800' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* የድርጅቱ ስም ማስተካከያ */}
        <Link href="/" className="text-2xl font-bold text-primary-600 tracking-tight">
          Sofi System Solutions
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-primary-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l dark:border-neutral-800 pl-6">
            {/* ቋንቋ መቀየሪያ */}
            <button 
              onClick={() => setLanguage(language === 'am' ? 'en' : 'am')}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors flex items-center gap-2 text-sm font-medium"
              title={language === 'am' ? 'Switch to English' : 'ወደ አማርኛ ቀይር'}
            >
              <Globe size={20} />
              <span>{language === 'am' ? 'EN' : 'አማ'}</span>
            </button>

            {/* Dark Mode መቀየሪያ */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* ቀጥታ መደወያ በተን */}
            <Button 
              className="bg-primary-600 hover:bg-primary-700 text-white rounded-full px-6"
              onClick={() => window.location.href='tel:0947359547'}
            >
              {t('contact.submit') || 'ይደውሉ'}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-neutral-600 dark:text-neutral-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-t dark:border-neutral-800 p-6 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-semibold py-2 border-b border-neutral-50 dark:border-neutral-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-center justify-between">
               <button 
                onClick={() => {
                  setLanguage(language === 'am' ? 'en' : 'am')
                  setIsMobileMenuOpen(false)
                }} 
                className="flex items-center gap-2 font-medium"
               >
                  <Globe size={20} /> {language === 'am' ? 'English' : 'አማርኛ'}
               </button>
               <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            
            <Button 
              className="w-full bg-primary-600 py-6 text-lg"
              onClick={() => {
                window.location.href='tel:0947359547'
                setIsMobileMenuOpen(false)
              }}
            >
              {t('contact.submit') || 'ይደውሉ'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}