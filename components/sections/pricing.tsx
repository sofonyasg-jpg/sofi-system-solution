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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white">
            {t('pricing.title')}
          </h2>
          <div className="h-1.5 w-24 bg-sky-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border-2 transition-all ${
                plan === 'business' 
                ? 'border-sky-500 shadow-xl shadow-sky-500/10 scale-105 relative z-10 bg-white dark:bg-neutral-900' 
                : 'border-sky-100 dark:border-neutral-800 bg-sky-50/30 dark:bg-neutral-900/50'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{t(`pricing.${plan}.name`)}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-sky-600">{t(`pricing.${plan}.price`)}</span>
                <span className="text-neutral-500 ml-2 italic text-sm">ETB</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {/* t() የሚሰጠው መረጃ Array መሆኑን ቼክ እናደርጋለን */}
                {Array.isArray(t(`pricing.${plan}.features`)) && t(`pricing.${plan}.features`).map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                    <Check size={18} className="text-sky-500 shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className={`w-full rounded-xl font-bold ${
                plan === 'business' ? 'bg-sky-500 hover:bg-sky-600' : 'bg-neutral-800 hover:bg-neutral-900'
              }`}>
                <Link href="#contact">{t('pricing.cta')}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}