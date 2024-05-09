import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/twMerge';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('flex flex-col space-y-1.5 p-5', className)} {...props} />;
  }
);

CardHeader.displayName = 'CardHeader';
