import { cva, VariantProps } from 'class-variance-authority';
import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/shared/utils/twMerge';

const textVariants = cva('', {
  variants: {
    sizes: {
      '48': 'text-48',
      '40': 'text-40',
      '36': 'text-36',
      '32': 'text-32',
      '28': 'text-28',
      '24': 'text-24',
      '20': 'text-20',
      '18': 'text-18',
      '16': 'text-16',
      '14': 'text-14',
      '12': 'text-12',
      '10': 'text-10'
    },
    weight: {
      '400': 'font-400',
      '500': 'font-500',
      '600': 'font-600',
      '700': 'font-700',
      '800': 'font-800'
    }
  },
  defaultVariants: {
    sizes: '14',
    weight: '400'
  }
});

type VariantElementTag =
  | ({
      variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    } & HTMLAttributes<HTMLHeadingElement>)
  | ({ variant?: 'p' } & HTMLAttributes<HTMLParagraphElement>)
  | ({ variant?: 'span' } & HTMLAttributes<HTMLSpanElement>);

type TextProps = VariantElementTag & VariantProps<typeof textVariants>;

const Text = forwardRef<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement, TextProps>(
  ({ variant: Comp = 'span', sizes, className, weight, ...props }: TextProps, ref) => {
    return <Comp ref={ref} {...props} className={cn(textVariants({ sizes, weight, className }))} />;
  }
);
Text.displayName = 'Text';
export default Text;
