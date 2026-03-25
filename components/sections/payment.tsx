'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/language-context'
import { SectionTitle } from '@/components/ui/section-title'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import * as Icons from 'lucide-react'

const methods = [
  { id: 'cbe', icon: Icons.Building, nameKey: 'payment.cbe.name', accountKey: 'payment.cbe.account' },
  { id: 'abyssinia', icon: Icons.Building, nameKey: 'payment.abyssinia.name', accountKey: 'payment.abyssinia.account' },
  { id: 'telebirr', icon: Icons.Phone, nameKey: 'payment.telebirr.name', accountKey: 'payment.telebirr.account' },
]

export default function Payment() {
  const { t } = useLanguage()
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const copy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    toast.success(t('payment.copied'))
    setTimeout(() => setCopiedId(null), 2000)
  }
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <SectionTitle title={t('payment.title')} subtitle={t('payment.description')} centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          {methods.map(({ id, icon: Icon, nameKey, accountKey }, idx) => {
            const acc = t(accountKey)
            return (
              <motion.div key={id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                        <Icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <h3 className="font-semibold">{t(nameKey)}</h3>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                      <span className="font-mono text-sm">{acc}</span>
                      <Button variant="ghost" size="sm" onClick={() => copy(acc, id)} className="p-1 h-auto">
                        {copiedId === id ? <Icons.CheckCircle size={16} className="text-success-500" /> : <Icons.Copy size={16} />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
        <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 mt-8 max-w-2xl mx-auto">{t('payment.note')}</p>
      </div>
    </section>
  )
}