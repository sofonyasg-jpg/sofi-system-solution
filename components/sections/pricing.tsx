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
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white italic uppercase tracking-tighter">
            {t('pricing.title')}
          </h2>
          <div className="h-2 w-32 bg-sky-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] border-2 transition-all ${
                plan === 'business' 
                ? 'border-sky-500 shadow-2xl shadow-sky-500/10 scale-105 relative z-10 bg-white dark:bg-neutral-900' 
                : 'border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50'
              }`}
            >
              <h3 className="text-2xl font-black mb-4 italic uppercase">{t(`pricing.${plan}.name`)}</h3>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-black text-sky-600 tracking-tighter">
                  {t(`pricing.${plan}.price`)}
                </span>
                <span className="text-neutral-500 font-bold italic">ETB</span>
              </div>
              
              <ul className="space-y-5 mb-10 min-h-[200px]">
                {Array.isArray(t(`pricing.${plan}.features`)) && 
                  t(`pricing.${plan}.features`).map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-neutral-700 dark:text-neutral-300">
                    <Check size={20} className="text-sky-600 shrink-0 mt-1" />
                    <span className="text-base font-bold leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className={`w-full h-14 rounded-2xl text-lg font-black ${
                plan === 'business' ? 'bg-sky-600 hover:bg-sky-700' : 'bg-neutral-900 hover:bg-black'
              }`}>
                <Link href="#contact">{t('pricing.cta')}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* የባንክ ቁጥሮችን የሚተካው አጭር መልዕክት */}
        <div className="mt-16 text-center max-w-3xl mx-auto p-8 border-2 border-dashed border-sky-100 dark:border-sky-900/30 rounded-[2rem] bg-sky-50/20">
          <div className="flex justify-center mb-4 text-sky-600">
            <ShieldCheck size={40} />
          </div>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 font-bold italic">
            {t('payment.description')}
          </p>
        </div>
      </div>
    </section>
  )
}