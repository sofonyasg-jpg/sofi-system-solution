'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/language-context'
import * as Icons from 'lucide-react'

const botResponses = {
  am: { welcome: 'ሰላም! እንዴት ልረዳዎት እችላለሁ?', services: 'አገልግሎቶች፦ ዌብ፣ ሞባይል፣ ኢ-ኮሜርስ...', pricing: 'ዋጋ ከ40,000 ብር ጀምሮ።', contact: 'ስልክ 0947 35 95 47፣ ኢሜይል sofonyasg@gmail.com', default: 'እንዴት ልረዳዎት?' },
  en: { welcome: 'Hello! How can I help?', services: 'Services: Web, Mobile, E-commerce...', pricing: 'Prices start from 40,000 ETB.', contact: 'Phone 0947 35 95 47, email sofonyasg@gmail.com', default: 'How can I help?' },
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ id: string; text: string; sender: 'user'|'bot' }[]>([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const { language } = useLanguage()
  const res = botResponses[language] || botResponses.en
  const messagesEnd = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messages.length === 0) setMessages([{ id: Date.now().toString(), text: res.welcome, sender: 'bot' }])
  }, [res.welcome])

  useEffect(() => { messagesEnd.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const send = () => {
    if (!input.trim()) return
    const userMsg = { id: Date.now().toString(), text: input, sender: 'user' as const }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      let reply = res.default
      const lower = input.toLowerCase()
      if (lower.includes('አገልግሎት') || lower.includes('service')) reply = res.services
      else if (lower.includes('ዋጋ') || lower.includes('price')) reply = res.pricing
      else if (lower.includes('አድራሻ') || lower.includes('contact')) reply = res.contact
      setMessages(prev => [...prev, { id: (Date.now()+1).toString(), text: reply, sender: 'bot' }])
      setTyping(false)
    }, 800)
  }

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 z-50 p-4 bg-primary-500 text-white rounded-full shadow-lg">
        {isOpen ? <Icons.X size={24} /> : <Icons.MessageCircle size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-neutral-0 dark:bg-neutral-800 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700">
            <div className="px-4 py-3 bg-primary-500 text-white flex justify-between">
              <div className="flex items-center gap-2">
                <Icons.Bot size={20} />
                <span>AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}><Icons.X size={18} /></button>
            </div>
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-neutral-50 dark:bg-neutral-900">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-primary-500 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-neutral-200 dark:bg-neutral-700 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEnd} />
            </div>
            <div className="p-4 border-t border-neutral-200 dark:border-neutral-700 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder={res.placeholder || 'Type...'}
                className="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-500"
              />
              <button onClick={send} className="px-3 py-2 bg-primary-500 text-white rounded-md">
                <Icons.Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}