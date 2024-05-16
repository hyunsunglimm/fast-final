import { cn } from '@/utils/twMerge';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva('', {
  variants: {
    size: {
      xs: 'h-[3.2rem] rounded-xs px-16 text-12',
      sm: 'h-[4rem] rounded-xs px-16 text-14',
      md: 'h-[4.8rem] w-full rounded-sm text-16 px-20',
      lg: 'h-[5.6rem] w-full rounded-sm text-16 px-20'
    },
    styled: {
      fill: 'bg-primary text-white',
      outline: 'bg-white border-[1px] border-gray-200',
      fill_disabled: 'bg-gray-200 text-gray-400',
      outline_disabled: 'bg-transparent border-[1px] border-gray-200 text-gray-400'
    }
  },
  defaultVariants: {
    size: 'lg',
    styled: 'fill'
  }
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, styled, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ styled, size, className }))} {...props} />
    );
  }
);

Button.displayName = 'Button';

export default Button;
