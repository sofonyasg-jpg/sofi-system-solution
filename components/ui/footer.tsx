'use client'

import { useLanguage } from '@/lib/i18n/language-context'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from './button'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-500">Sofi System Solution</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{t('footer.motto')}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3 text-neutral-400">
              <li><Link href="#home" className="hover:text-primary-500">{t('nav.home')}</Link></li>
              <li><Link href="#services" className="hover:text-primary-500">{t('nav.services')}</Link></li>
              <li><Link href="#contact" className="hover:text-primary-500">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t('contact.title')}</h4>
            <ul className="space-y-4 text-neutral-400">
              <li className="flex items-center gap-3"><Phone size={18} /> +251 947 35 95 47</li>
              <li className="flex items-center gap-3"><Mail size={18} /> sofonyasg@gmail.com</li>
            </ul>
            <div className="mt-6">
               <Button size="sm" onClick={() => window.location.href='#contact'}>Get in Touch</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
          <p>© {year} Sofi System Solution. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}