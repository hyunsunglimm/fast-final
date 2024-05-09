import { cva, VariantProps } from 'class-variance-authority';
import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/twMerge';

const textVariants = cva('', {
  variants: {
    sizes: {
      data48: 'text-data48',
      data40: 'text-data40',
      data36: 'text-data36',
      title32: 'text-title32',
      title28: 'text-title28',
      title24: 'text-title24',
      title20: 'text-title20',
      title18: 'text-title18',
      body16: 'text-body16',
      body14: 'text-body14',
      caption12: 'text-caption12',
      caption10: 'text-caption10'
    },
    weight: {
      bold: 'font-bold',
      medium: 'font-medium',
      regular: 'font-normal'
    }
  },
  defaultVariants: {
    sizes: 'body14',
    weight: 'regular'
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
