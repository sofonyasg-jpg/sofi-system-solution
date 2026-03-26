'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Phone, Send, Banknote, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const { language } = useLanguage()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      language: language, // ያንተ Schema የሚጠይቀው
      service: "Consultation" // እንደ አማራጭ
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        toast.success('መልዕክትዎ በስኬት ተልኳል!')
        ;(event.target as HTMLFormElement).reset()
      } else {
        toast.error(result.error)
      }
    } catch (error) {
      toast.error('ግንኙነት ተቋርጧል፣ እባክዎ ኢንተርኔትዎን ያረጋግጡ!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-sky-600 italic">Contact Us</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-800">
                <div className="p-3 bg-sky-100 dark:bg-sky-900/30 rounded-lg text-sky-600"><Phone size={24} /></div>
                <div>
                  <p className="text-sm text-neutral-500 font-bold uppercase tracking-wider">Call Us</p>
                  <p className="font-bold text-lg text-neutral-800 dark:text-neutral-200">+251 947 35 95 47</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-800">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600"><Banknote size={24} /></div>
                <div>
                  <p className="text-sm text-neutral-500 font-bold uppercase tracking-wider">Payment Methods</p>
                  <p className="font-bold text-neutral-800 dark:text-neutral-200">Commercial Bank of Ethiopia (CBE)</p>
                  <p className="font-bold text-neutral-800 dark:text-neutral-200">Bank of Abyssinia</p>
                  <p className="text-xs text-sky-600 mt-1 italic font-medium">* Account details shared privately for security.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-950 p-8 rounded-2xl shadow-2xl border border-neutral-100 dark:border-neutral-800">
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input name="name" placeholder="ሙሉ ስም" required className="h-14 font-medium" />
              <Input name="email" type="email" placeholder="ኢሜይል" required className="h-14 font-medium" />
              <Input name="phone" placeholder="ስልክ ቁጥር" className="h-14 font-medium" />
              <Textarea name="message" placeholder="እንዴት ልንረዳዎ እንችላለን?..." required className="min-h-[160px] font-medium" />
              <Button type="submit" disabled={loading} className="w-full h-14 bg-sky-600 hover:bg-sky-700 text-xl font-bold rounded-xl shadow-lg shadow-sky-500/20">
                {loading ? 'በመላክ ላይ...' : 'መልዕክት ላክ'} <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}