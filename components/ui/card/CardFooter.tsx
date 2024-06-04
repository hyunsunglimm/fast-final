import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/shared/utils/twMerge';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';
