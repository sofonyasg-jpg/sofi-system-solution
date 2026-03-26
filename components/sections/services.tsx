'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/language-context'
import Image from 'next/image'

// አምስቱ አገልግሎቶች ከአንድ ጊዜያዊ ፎቶ (Placeholder) ጋር
// ማሳሰቢያ፡ ቆይተህ እነዚህን በ '/images/service-software.png' ወዘተ መተካት ትችላለህ።
const serviceItems = [
  { id: 'software', img: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 'web', img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 'mobile', img: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 'it', img: 'https://images.pexels.com/photos/3183158/pexels-photo-3183158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 'bot', img: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
]

export default function Services() {
  const { t } = useLanguage()

  return (
    // ሙሉ ክፍሉ ውሃ ሰማያዊ ጀርባ እንዲኖረው (bg-sky-50)
    <section id="services" className="py-24 bg-sky-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white">
            {t('services.title')}
          </h2>
          <div className="h-1.5 w-24 bg-sky-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceItems.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              // ካርዶቹ ነጭ ሆነው ውሃ ሰማያዊው ላይ ጎልተው እንዲታዩ
              className="bg-white dark:bg-neutral-900 rounded-3xl shadow-lg border border-sky-100 dark:border-neutral-800 overflow-hidden group hover:border-sky-300 transition-all hover:shadow-2xl hover:shadow-sky-500/10"
            >
              {/* የምስል ክፍል */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image 
                  src={service.img} 
                  alt={t(`services.${service.id}.title`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* የጽሁፍ ክፍል */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white group-hover:text-sky-600 transition-colors">
                  {t(`services.${service.id}.title`)}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                  {t(`services.${service.id}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}