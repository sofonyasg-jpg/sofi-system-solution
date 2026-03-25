'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import * as Icons from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
    >
      {resolvedTheme === 'dark' ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
    </button>
  )
}