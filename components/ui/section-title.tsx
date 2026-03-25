import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={cn('space-y-2', centered && 'text-center')}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">{subtitle}</p>}
      <div className={cn('w-20 h-1 bg-primary-500 rounded-full', centered && 'mx-auto')} />
    </div>
  )
}