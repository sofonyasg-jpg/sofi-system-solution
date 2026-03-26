'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/language-context'

export default function About() {
  const { language, t } = useLanguage()

  // የአማርኛ እና የእንግሊዝኛ ይዘቶች
  const content = {
    am: {
      title: t('nav.about'),
      name: 'ሶፎኒያስ ግርማ ገ/ጻዲቅ',
      founderTitle: t('about.founderTitle'),
      message: t('about.message'),
      visionTitle: t('about.visionTitle'),
      visionDesc: t('about.visionDesc'),
      missionTitle: t('about.missionTitle'),
      missionDesc: t('about.missionDesc'),
    },
    en: {
      title: t('nav.about'),
      name: 'Sophonias Girma G/Tsadik',
      founderTitle: t('about.founderTitle'),
      message: t('about.message'),
      visionTitle: t('about.visionTitle'),
      visionDesc: t('about.visionDesc'),
      missionTitle: t('about.missionTitle'),
      missionDesc: t('about.missionDesc'),
    }
  }

  const d = language === 'am' ? content.am : content.en

  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* የፎቶ ክፍል */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* ከፎቶው ጀርባ ያለው የጌጥ ሳጥን */}
              <div className="absolute -inset-4 bg-sky-100 rounded-[2rem] -rotate-6" />
              
              {/* ዋናው የፎቶ ፍሬም */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-8 border-white shadow-xl bg-sky-50">
                <Image 
                  // ፋይሉ በ public/images/sophonias.png መሆኑን እርግጠኛ ሁን
                  src="/images/sophonias.png" 
                  alt={d.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* የጽሁፍ መልዕክት ክፍል */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sky-600 font-bold tracking-widest uppercase mb-4">{d.title}</h2>
            
            <div className="mb-6">
              <h4 className="text-2xl font-black text-neutral-900 dark:text-white">{d.name}</h4>
              <p className="text-sky-700 font-semibold italic text-lg">{d.founderTitle}</p>
            </div>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed font-medium">
              {d.message}
            </p>

            {/* ራዕይ እና ተልዕኮ ካርዶች */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-sky-50 dark:bg-neutral-900 rounded-2xl border border-sky-100">
                <h4 className="font-bold text-sky-700 mb-2">{d.visionTitle}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  {d.visionDesc}
                </p>
              </div>
              <div className="p-6 bg-sky-50 dark:bg-neutral-900 rounded-2xl border border-sky-100">
                <h4 className="font-bold text-sky-700 mb-2">{d.missionTitle}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  {d.missionDesc}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}