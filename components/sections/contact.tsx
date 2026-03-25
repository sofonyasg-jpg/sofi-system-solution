'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/language-context'
import { Button } from '@/components/ui/button'
import * as Icons from 'lucide-react'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">{t('contact.title')}</h2>
      </div>

      <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-bold mb-4">{t('contact.get_in_touch')}</h3>
            
            <a href="tel:0947359547" className="flex items-center gap-5 p-5 border rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all group">
              <div className="p-4 bg-primary-500 text-white rounded-xl group-hover:rotate-12 transition-transform">
                <Icons.Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-neutral-500">{t('contact.call')}</p>
                <p className="text-xl font-bold">0947359547</p>
              </div>
            </a>

            <a href="mailto:sofoniasgirma@gmail.com" className="flex items-center gap-5 p-5 border rounded-2xl hover:bg-secondary-50 dark:hover:bg-secondary-900/10 transition-all group">
              <div className="p-4 bg-secondary-500 text-white rounded-xl group-hover:rotate-12 transition-transform">
                <Icons.Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-neutral-500">{t('contact.email')}</p>
                <p className="text-lg font-bold">sofoniasgirma@gmail.com</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border"
        >
          <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium ml-1">{t('contact.name_label')}</label>
              <input type="text" className="w-full p-3 rounded-xl border bg-white dark:bg-neutral-800 outline-none focus:ring-2 focus:ring-primary-500" required />
            </div>
            <div>
              <label className="text-sm font-medium ml-1">{t('contact.email_label')}</label>
              <input type="email" className="w-full p-3 rounded-xl border bg-white dark:bg-neutral-800 outline-none focus:ring-2 focus:ring-primary-500" required />
            </div>
            <div>
              <label className="text-sm font-medium ml-1">{t('contact.message_label')}</label>
              <textarea rows={4} className="w-full p-3 rounded-xl border bg-white dark:bg-neutral-800 outline-none focus:ring-2 focus:ring-primary-500" required></textarea>
            </div>
            <Button type="submit" className="w-full py-6 text-lg font-bold rounded-xl shadow-lg shadow-primary-500/20">
              {t('contact.submit')}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}