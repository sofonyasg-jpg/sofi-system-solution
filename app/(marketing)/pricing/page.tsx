import { Metadata } from 'next'
import Pricing from '@/components/sections/pricing'

export const metadata: Metadata = { title: 'ዋጋዎች | Sofi System' }

export default function PricingPage() {
  return <Pricing />
}