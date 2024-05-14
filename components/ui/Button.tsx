import { cn } from '@/utils/twMerge';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva('px-[1.6rem]', {
  variants: {
    size: {
      full: 'w-full h-[4.8rem] text-16',
      sm: 'w-[6.7rem] h-[3.2rem] text-10',
      signup_prev: 'w-[9.3rem] h-[5.4rem] text-16',
      signup_next: 'w-[21rem] h-[5.4rem] text-16'
    },
    styled: {
      fill: 'bg-black text-white',
      outline: 'bg-white border-[1px] border-black',
      disabled: 'bg-gray-300 text-white'
    },
    rounded: {
      md: 'rounded-[0.8rem]',
      lg: 'rounded-[1.1rem]',
      xl: 'rounded-[2.7rem]'
    }
  },
  defaultVariants: {
    size: 'full',
    styled: 'fill',
    rounded: 'md'
  }
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, styled, rounded, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ styled, size, className, rounded }))}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
