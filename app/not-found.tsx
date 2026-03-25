import Link from 'next/link'
import { Button } from '@/components/ui/button'
import * as Icons from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <Icons.FileQuestion className="w-12 h-12 text-warning-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">ገጹ አልተገኘም</h1>
        <p className="mb-8">የሚፈልጉት ገጽ ላይገኝ ይችላል።</p>
        <Button asChild>
          <Link href="/">ወደ መነሻ ገጽ</Link>
        </Button>
      </div>
    </div>
  )
}