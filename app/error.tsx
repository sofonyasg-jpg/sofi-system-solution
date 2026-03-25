'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import * as Icons from 'lucide-react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => console.error(error), [error])
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <Icons.AlertTriangle className="w-12 h-12 text-error-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">አገልግሎቱ ላይ ስህተት ተፈጥሯል</h1>
        <p className="mb-8">እባክዎ እንደገና ይሞክሩ።</p>
        <Button onClick={reset}>እንደገና ሞክር</Button>
      </div>
    </div>
  )
}