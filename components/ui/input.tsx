import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, error, label, id, ...props }, ref) => {
  const inputId = id || `input-${Math.random()}`
  return (
    <div className="space-y-1.5">
      {label && <label htmlFor={inputId} className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</label>}
      <input id={inputId} className={cn('flex h-10 w-full rounded-lg border border-neutral-300 bg-neutral-0 px-3 py-2 text-sm ring-offset-neutral-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900', error && 'border-error-500', className)} ref={ref} {...props} />
      {error && <p className="text-sm text-error-500">{error}</p>}
    </div>
  )
})
Input.displayName = 'Input'