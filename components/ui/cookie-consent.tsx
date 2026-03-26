'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/language-context'
import { Button } from './button'
import * as Icons from 'lucide-react'

export default function CookieConsent() {
  const [show, setShow] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-6 right-6 z-[60] max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                <Icons.Cookie className="text-primary-500" size={20} />
                {t('cookie.title') || 'Cookie Settings'}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t('cookie.description') || 'We use cookies to improve your experience on our site.'}
              </p>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={accept}
                className="text-neutral-600 dark:text-neutral-400"
              >
                {t('cookie.settings') || 'Settings'}
              </Button>
              
              {/* እዚህ ጋር ነው variant="default" የተደረገው */}
              <Button 
                variant="default" 
                size="sm" 
                onClick={accept}
              >
                {t('cookie.accept') || 'Accept All'}
              </Button>

              <button 
                onClick={accept} 
                className="p-2 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
              >
                <Icons.X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}