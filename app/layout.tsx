import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from './providers'
import { Navbar } from '@/components/ui/navbar' // እዚህ ጋር { } መጨመሩን እርግጠኛ ሁን
import Footer from '@/components/ui/footer'
import { Toaster } from 'sonner'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sofi System Solution - Technology Excellence',
  description: 'Professional Software Development, Web Design, and IT Solutions in Addis Ababa, Ethiopia.',
  keywords: 'Software Development, Web Design, Next.js, Flutter, Ethiopia, Addis Ababa, IT Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
                {children}
              </Suspense>
            </main>
            <Footer />
          </div>
          <Toaster position="top-center" richColors />
        </Providers>
      </body>
    </html>
  )
}