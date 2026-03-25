'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext<any>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLangState] = useState('am')

  // ገጹ ሲከፈት የተቀመጠ ኩኪ ካለ መፈለጊያ
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop()?.split(';').shift()
    }
    
    const savedLang = getCookie('NEXT_LOCALE')
    if (savedLang && (savedLang === 'am' || savedLang === 'en')) {
      setLangState(savedLang)
    }
  }, [])

  const setLanguage = (lang: string) => {
    setLangState(lang)
    // ኩኪውን ለ1 ዓመት እንዲቆይ አድርጎ ሴቭ ማድረግ
    document.cookie = `NEXT_LOCALE=${lang};path=/;max-age=31536000`
  }

  const t = (path: string) => {
    const keys = path.split('.')
    let result: any = translations[language as keyof typeof translations]
    for (const key of keys) {
      if (!result || !result[key]) return path
      result = result[key]
    }
    return result
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)