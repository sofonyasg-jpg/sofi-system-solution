'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/language-context'
import { SectionTitle } from '@/components/ui/section-title'
import * as Icons from 'lucide-react'

// ስታቲስቲክስ - 50+ projects ጠፍቷል፣ 2 ዓመት ሆኗል
const stats = [
  { icon: Icons.Award, value: '2', key: 'years' },
  { icon: Icons.Users, value: '24/7', key: 'support' },
]

export default function About() {
  const { t } = useLanguage()

  // የአማርኛ ዝርዝር መረጃዎችን በጥንቃቄ መቀበያ
  const rawItems = t('about.values.items')
  const valuesItems = Array.isArray(rawItems) ? rawItems : []

  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <SectionTitle title={t('about.title')} centered />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* የግራ ጎን - ተልዕኮ እና ራዕይ */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="space-y-6"
          >
            <div className="bg-primary-50 dark:bg-primary-900/10 p-8 rounded-2xl border border-primary-100 dark:border-primary-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
                  <Icons.Target className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold">{t('about.mission.short')}</h3>
              </div>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">
                {t('about.mission.full')}
              </p>
            </div>

            <div className="bg-secondary-50 dark:bg-secondary-900/10 p-8 rounded-2xl border border-secondary-100 dark:border-secondary-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
                  <Icons.Eye className="w-6 h-6 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-bold">{t('about.vision.short')}</h3>
              </div>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">
                {t('about.vision.full')}
              </p>
            </div>
          </motion.div>

          {/* የቀኝ ጎን - እሴቶች እና ስታቲስቲክስ */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">{t('about.values.title')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {valuesItems.length > 0 ? (
                  valuesItems.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-100 dark:border-neutral-800">
                      <Icons.ShieldCheck className="text-green-500 w-5 h-5 shrink-0" />
                      <span className="font-medium text-sm">{item}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-neutral-400 italic">መረጃው በመጫን ላይ...</p>
                )}
              </div>
            </div>

            {/* የታችኛው ስታቲስቲክስ */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map(({ icon: Icon, value, key }) => (
                <div key={key} className="text-center p-6 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-sm">
                  <Icon className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <div className="text-3xl font-bold text-neutral-900 dark:text-white">{value}</div>
                  <div className="text-xs uppercase font-bold text-neutral-500 tracking-widest mt-1">
                    {t(`about.stats.${key}`)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}