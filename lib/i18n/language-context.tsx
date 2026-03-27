'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext<any>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLangState] = useState('am')

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
    document.cookie = `NEXT_LOCALE=${lang};path=/;max-age=31536000`
  }

  // የተሻሻለ የ t ፈንክሽን
  const t = (path: string) => {
    const keys = path.split('.')
    let result: any = translations[language as keyof typeof translations]
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key]
      } else {
        return path // ትርጉሙ ካልተገኘ የቁልፉን ስም ይመልሳል
      }
    }
    return result
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}