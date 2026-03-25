import type { Metadata } from 'next'
import { Noto_Sans_Ethiopic, Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from './providers'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import { Toaster } from 'sonner'
import { Suspense } from 'react'
import { Analytics } from '@/components/shared/analytics'

const notoSans = Noto_Sans_Ethiopic({ subsets: ['ethiopic'], variable: '--font-noto-sans-ethiopic', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'Sofi System Solution', template: '%s | Sofi System' },
  description: 'የዲጂታል ለውጥ አጋርዎ',
  openGraph: { title: 'Sofi System Solution', locale: 'am_ET', type: 'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="am" suppressHydrationWarning>
      <body className={`${notoSans.variable} ${inter.variable} font-sans antialiased`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster position="top-center" richColors closeButton />
          <Suspense fallback={null}><Analytics /></Suspense>
        </Providers>
      </body>
    </html>
  )
}