'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/language-context'
import { Button } from './button'
import * as Icons from 'lucide-react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const { t } = useLanguage()
  useEffect(() => { if (!localStorage.getItem('cookie-consent')) setVisible(true) }, [])
  const accept = () => { localStorage.setItem('cookie-consent', 'accepted'); setVisible(false) }
  if (!visible) return null
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100 }} className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-neutral-0 dark:bg-neutral-800 border-t shadow-lg">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Icons.Cookie className="w-6 h-6 text-primary-500" />
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{t('cookie.text')}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="ghost" size="sm" onClick={accept}>Settings</Button>
          <Button variant="primary" size="sm" onClick={accept}>{t('cookie.accept')}</Button>
          <button onClick={accept} className="p-2 text-neutral-500">
            <Icons.X size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}