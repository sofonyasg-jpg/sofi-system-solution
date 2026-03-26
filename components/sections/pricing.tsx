'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/language-context'
import { Check, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const plans = ['basic', 'business', 'premium']

export default function Pricing() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white italic uppercase">
            {t('pricing.title')}
          </h2>
          <div className="h-1.5 w-24 bg-sky-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-[2rem] border-2 transition-all hover:shadow-xl ${
                plan === 'business' 
                ? 'border-sky-500 shadow-sky-500/10 scale-105 relative z-10 bg-white dark:bg-neutral-900' 
                : 'border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50'
              }`}
            >
              <h3 className="text-xl font-black mb-4 uppercase italic">
                {t(`pricing.${plan}.name`)}
              </h3>
              
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-sky-600">
                  {t(`pricing.${plan}.price`)}
                </span>
                <span className="text-neutral-500 font-bold italic text-sm">ETB</span>
              </div>
              
              <ul className="space-y-4 mb-8 min-h-[180px]">
                {Array.isArray(t(`pricing.${plan}.features`)) && 
                  (t(`pricing.${plan}.features`) as string[]).map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                    <Check size={18} className="text-sky-500 shrink-0" />
                    <span className="text-sm font-bold">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className={`w-full h-12 rounded-xl font-black ${
                plan === 'business' ? 'bg-sky-600 hover:bg-sky-700' : 'bg-neutral-900 hover:bg-black'
              }`}>
                <Link href="#contact">{t('pricing.cta')}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Info Note (ባንክ ቁጥሮችን የተካው አጭር መልዕክት) */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 border border-dashed border-sky-200 rounded-2xl bg-sky-50/30">
          <div className="flex justify-center mb-3 text-sky-600">
            <ShieldCheck size={32} />
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 font-bold italic text-lg">
            {t('payment.description')}
          </p>
        </div>

      </div>
    </section>
  )
}