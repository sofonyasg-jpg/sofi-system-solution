'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Phone, Send, Mail, MapPin } from 'lucide-react'
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
      language: language,
      service: "General Inquiry"
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        toast.success(language === 'am' ? 'መልዕክትዎ በስኬት ተልኳል!' : 'Message sent successfully!')
        ;(event.target as HTMLFormElement).reset()
      } else {
        toast.error(result.error)
      }
    } catch (error) {
      toast.error(language === 'am' ? 'ግንኙነት ተቋርጧል!' : 'Connection failed!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* የድርጅቱ መረጃ ክፍል */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-black text-sky-600 italic mb-6">Get In Touch</h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                ለማንኛውም የሶፍትዌር ልማት፣ የዌብሳይት ዲዛይን ወይም የቴክኒክ ድጋፍ ጥያቄዎች ካሉዎት ይጻፉልን። የሶፊ ሲስተም ባለሙያዎች በፍጥነት ምላሽ ይሰጡዎታል።
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5 p-6 bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800">
                <div className="p-4 bg-sky-100 dark:bg-sky-900/30 rounded-xl text-sky-600">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <p className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">+251 947 35 95 47</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-6 bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800">
                <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* መልክት መላኪያ ፎርም */}
          <div className="bg-white dark:bg-neutral-950 p-8 md:p-10 rounded-3xl shadow-2xl border border-neutral-100 dark:border-neutral-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-sky-600"></div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input name="name" placeholder="ሙሉ ስም" required className="h-14 text-lg rounded-xl border-neutral-200" />
              <Input name="email" type="email" placeholder="ኢሜይል አድራሻ" required className="h-14 text-lg rounded-xl border-neutral-200" />
              <Input name="phone" placeholder="ስልክ ቁጥር" className="h-14 text-lg rounded-xl border-neutral-200" />
              <Textarea name="message" placeholder="እንዴት ልንረዳዎ እንችላለን?..." required className="min-h-[180px] text-lg rounded-xl border-neutral-200" />
              <Button type="submit" disabled={loading} className="w-full h-16 bg-sky-600 hover:bg-sky-700 text-xl font-black rounded-xl shadow-xl shadow-sky-500/20 transition-all active:scale-95">
                {loading ? 'በመላክ ላይ...' : 'መልዕክት ላክ'} <Send className="ml-3 h-6 w-6" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}