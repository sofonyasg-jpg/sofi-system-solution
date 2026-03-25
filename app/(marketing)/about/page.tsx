import { Metadata } from 'next'
import About from '@/components/sections/about'
import Values from '@/components/sections/values'

export const metadata: Metadata = { title: 'ስለ እኛ | Sofi System' }

export default function AboutPage() {
  return (
    <>
      <About />
      <Values />
    </>
  )
}