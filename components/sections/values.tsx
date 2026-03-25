'use client'
import { useLanguage } from '@/lib/i18n/language-context'
import { Lightbulb, ShieldCheck, Award, Users, Accessibility } from 'lucide-react'

export default function Values() {
  const { t } = useLanguage()
  
  const values = [
    { icon: Lightbulb, title: t('values.innovation.title'), desc: t('values.innovation.desc') },
    { icon: ShieldCheck, title: t('values.reliability.title'), desc: t('values.reliability.desc') },
    { icon: Award, title: t('values.quality.title'), desc: t('values.quality.desc') },
    { icon: Users, title: t('values.customer.title'), desc: t('values.customer.desc') },
    { icon: Accessibility, title: t('values.accessibility.title'), desc: t('values.accessibility.desc') },
  ]

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('values.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((v, i) => (
            <div key={i} className="text-center p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm">
              <v.icon className="w-12 h-12 mx-auto mb-4 text-primary-500" />
              <h3 className="font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}