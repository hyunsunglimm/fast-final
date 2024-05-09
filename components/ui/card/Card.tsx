import { cn } from '@/utils/twMerge';
import { forwardRef, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const cardVariants = cva('bg-white shadow text-card-foreground border', {
  variants: {
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-2xl'
    }
  },
  defaultVariants: {
    rounded: 'xl'
  }
});

type CardPropsType = HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>;

const Card = forwardRef<HTMLDivElement, CardPropsType>(({ className, rounded, ...props }, ref) => {
  return <div ref={ref} className={cn(cardVariants({ className, rounded }))} {...props} />;
});
Card.displayName = 'Card';

export default Card;
