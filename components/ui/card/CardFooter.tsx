import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/twMerge';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('flex items-center p-5 pt-0', className)} {...props} />;
  }
);
CardFooter.displayName = 'CardFooter';

export default CardFooter;
