'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/language-context'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import * as Icons from 'lucide-react'

const plans = ['basic', 'business', 'premium'] as const

export default function Pricing() {
  const { t } = useLanguage()
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const paymentMethods = [
    { id: 'cbe', name: t('payment.cbe.name'), acc: t('payment.cbe.account') },
    { id: 'abyssinia', name: t('payment.abyssinia.name'), acc: t('payment.abyssinia.account') },
    { id: 'telebirr', name: t('payment.telebirr.name'), acc: t('payment.telebirr.account') },
  ]

  return (
    <section id="pricing" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        {/* 1. የዋጋ ርዕስ ክፍል */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t('pricing.title')}
          </motion.h2>
          <div className="h-1.5 w-20 bg-primary-500 mx-auto rounded-full" />
        </div>

        {/* 2. የዋጋ ካርዶች (3ቱ አማራጮች) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="relative h-full overflow-hidden border-2 hover:border-primary-500 transition-all bg-white dark:bg-neutral-800 shadow-sm">
                <CardContent className="p-8 flex flex-col h-full text-center">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{t(`pricing.${plan}.name`)}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-6">
                    <span className="text-4xl font-black text-primary-600">{t(`pricing.${plan}.price`)}</span>
                    <span className="text-neutral-500 text-sm font-bold tracking-tighter">ETB</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8 text-left flex-grow">
                    {(t(`pricing.${plan}.features`) as string[]).map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icons.CheckCircle2 className="text-success-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-600 dark:text-neutral-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full py-6 rounded-xl font-bold text-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all">
                    <Link href="#contact">{t('pricing.cta')}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 3. አንድ የተቀናጀ የክፍያ ሳጥን (Click to Copy) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 bg-white dark:bg-neutral-900 rounded-[2rem] border-2 border-primary-100 dark:border-primary-900 shadow-2xl relative overflow-hidden"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2 text-primary-600">{t('payment.title')}</h3>
            <p className="text-neutral-500 text-sm">{t('payment.description')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => handleCopy(method.acc, method.id)}
                className="relative p-6 border-2 border-neutral-100 dark:border-neutral-800 rounded-2xl bg-neutral-50/50 dark:bg-neutral-800/50 hover:border-primary-500 hover:bg-white dark:hover:bg-neutral-800 transition-all group active:scale-95 flex flex-col items-center justify-center overflow-hidden"
              >
                <p className="text-[11px] text-neutral-400 mb-2 font-bold uppercase tracking-wider">{method.name}</p>
                <p className="text-xl font-mono font-black text-neutral-800 dark:text-neutral-100">{method.acc}</p>
                <p className="text-[10px] text-primary-500 mt-2 font-bold opacity-80">{t('pricing.payment_name')}</p>
                
                {/* Copy Icon on Hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icons.Copy size={14} className="text-primary-400" />
                </div>

                {/* Copied Overlay */}
                <AnimatePresence>
                  {copiedId === method.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center bg-primary-600 text-white font-bold"
                    >
                      <Icons.Check size={20} className="mr-2" />
                      {t('payment.copied')}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <p className="text-center text-xs text-neutral-400 italic font-medium leading-relaxed">
              {t('payment.note')}
            </p>
            <div className="flex justify-center items-center gap-1.5 mt-3 text-[10px] text-neutral-300 font-bold uppercase tracking-widest">
              <Icons.MousePointer2 size={10} />
              <span>{t('payment.copy_hint')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}