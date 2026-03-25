'use client'

import { useLanguage } from '@/lib/i18n/language-context'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex border rounded-lg overflow-hidden">
      <button
        onClick={() => setLanguage('am')}
        className={cn('px-3 py-1.5 text-sm font-medium transition-colors',
          language === 'am' ? 'bg-primary-500 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
        )}
      >
        አማ
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn('px-3 py-1.5 text-sm font-medium transition-colors',
          language === 'en' ? 'bg-primary-500 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
        )}
      >
        EN
      </button>
    </div>
  )
}