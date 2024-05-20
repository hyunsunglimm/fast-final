import { cn } from '@/utils/twMerge';
import { forwardRef, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const cardVariants = cva('bg-white shadow-3xl text-card-foreground', {
  variants: {
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg'
    }
  },
  defaultVariants: {
    rounded: 'md'
  }
});

type CardPropsType = HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>;

export const Card = forwardRef<HTMLDivElement, CardPropsType>(
  ({ className, rounded, ...props }, ref) => {
    return <div ref={ref} className={cn(cardVariants({ className, rounded }))} {...props} />;
  }
);
Card.displayName = 'Card';
