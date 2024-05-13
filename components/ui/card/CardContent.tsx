import { cn } from '@/utils/twMerge';
import { forwardRef, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const cardContentVariants = cva('p-5 pt-0 flex', {
  variants: {
    flexDirection: {
      col: 'flex-col',
      row: 'flex-row',
      colReverse: 'flex-col-reverse',
      rowReverse: 'flex-row-reverse'
    },
    alignItems: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      base: 'items-baseline',
      stretch: 'items-stretch'
    },
    justifyContent: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    }
  },
  defaultVariants: {
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'start'
  }
});

type CardContentProps = VariantProps<typeof cardContentVariants> & HTMLAttributes<HTMLDivElement>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, flexDirection, justifyContent, alignItems, ...props }: CardContentProps, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardContentVariants({ className, flexDirection, justifyContent, alignItems })
        )}
        {...props}
      />
    );
  }
);
CardContent.displayName = 'CardContent';
