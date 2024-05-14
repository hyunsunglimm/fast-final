import { cn } from '@/utils/twMerge';
import { forwardRef, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const flexBoxVariants = cva('flex', {
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

type FlexBoxProps = VariantProps<typeof flexBoxVariants> & HTMLAttributes<HTMLDivElement>;

const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ className, justifyContent, flexDirection, alignItems, ...props }: FlexBoxProps, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn({ className, justifyContent, flexDirection, alignItems })}
      />
    );
  }
);
FlexBox.displayName = 'FlexBox';
export default FlexBox;
