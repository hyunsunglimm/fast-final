import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/twMerge';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col', className)} {...props} />
  )
);

CardHeader.displayName = 'CardHeader';
