'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/language-context'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const plans = ['basic', 'business', 'premium']

export default function Pricing() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        {/* ርዕስ (የአገልግሎት ዋጋዎች) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white italic uppercase tracking-tighter">
            {t('pricing.title')}
          </h2>
          <div className="h-2 w-32 bg-sky-600 mx-auto mt-6 rounded-full shadow-lg shadow-sky-500/20" />
        </div>

        {/* የዋጋ ካርዶች (Pricing Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] border-2 transition-all duration-300 hover:shadow-2xl ${
                plan === 'business' 
                ? 'border-sky-500 shadow-2xl shadow-sky-500/15 scale-105 relative z-10 bg-white dark:bg-neutral-900' 
                : 'border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 hover:border-sky-200'
              }`}
            >
              {plan === 'business' && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-sky-600 text-white px-6 py-1 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight italic">
                {t(`pricing.${plan}.name`)}
              </h3>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-black text-sky-600 tracking-tighter">
                  {t(`pricing.${plan}.price`)}
                </span>
                <span className="text-neutral-500 font-bold italic">ETB</span>
              </div>
              
              <ul className="space-y-5 mb-10 min-h-[220px]">
                {/* Features ዝርዝር */}
                {Array.isArray(t(`pricing.${plan}.features`)) && 
                  (t(`pricing.${plan}.features`) as string[]).map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-neutral-700 dark:text-neutral-300">
                    <div className="mt-1 p-0.5 bg-sky-100 dark:bg-sky-900/30 rounded-full">
                      <Check size={16} className="text-sky-600 font-bold" />
                    </div>
                    <span className="text-base font-semibold leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className={`w-full h-14 rounded-2xl text-lg font-black transition-all shadow-lg ${
                plan === 'business' 
                ? 'bg-sky-600 hover:bg-sky-700 shadow-sky-500/30 text-white' 
                : 'bg-neutral-900 dark:bg-neutral-800 hover:bg-black text-white'
              }`}>
                <Link href="#contact" className="flex items-center justify-center gap-2">
                  {t('pricing.cta')}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* ⚠️ እዚህ ጋር የነበሩት የባንክ አካውንቶች እና ማሳሰቢያዎች ሙሉ በሙሉ ተወግደዋል */}
      </div>
    </section>
  )
}