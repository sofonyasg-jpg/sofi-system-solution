'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/language-context'
import Image from 'next/image'

const services = [
  { id: 'development', img: '/web.png' },
  { id: 'mobile', img: '/mobile.png' },
  { id: 'design', img: '/design.png' },
]

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">{t('services.title')}</h2>
          <div className="h-1.5 w-20 bg-primary-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-xl transition-all group"
            >
              <div className="mb-6 relative w-16 h-16 group-hover:scale-110 transition-transform">
                <Image 
                  src={service.img} 
                  alt={t(`services.${service.id}.title`)}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{t(`services.${service.id}.title`)}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t(`services.${service.id}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}