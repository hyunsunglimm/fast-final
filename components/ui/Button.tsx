import { cn } from '@/shared/utils/twMerge';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
export const buttonVariants = cva('flex items-center justify-center active:opacity-90', {
  variants: {
    size: {
      xs: 'h-[3.2rem] rounded-xs px-12 text-12',
      sm: 'h-[4rem] rounded-xs px-16 text-14',
      md: 'h-[4.8rem] w-full rounded-sm text-16 px-20',
      lg: 'h-[5.6rem] w-full rounded-sm text-16 px-20'
    },
    styled: {
      fill: 'bg-primary text-white',
      fill_black: 'bg-black text-white',
      fill_blue: 'bg-[#5A7EFF] text-white',
      fill_gray: 'bg-[#4B5158] text-white',
      outline: 'bg-white border-[1px] border-gray-200'
    },
    disabled: {
      true: 'cursor-not-allowed',
      false: ''
    }
  },
  defaultVariants: {
    disabled: false,
    size: 'lg',
    styled: 'fill'
  },
  compoundVariants: [
    { styled: 'fill', disabled: true, className: 'bg-gray-200 text-gray-400' },
    { styled: 'fill_black', disabled: true, className: 'bg-gray-200 text-gray-400' },
    { styled: 'fill_blue', disabled: true, className: 'bg-gray-200 text-gray-400' },
    { styled: 'fill_gray', disabled: true, className: 'bg-gray-200 text-gray-400' },
    {
      styled: 'outline',
      disabled: true,
      className: 'bg-transparent border-[1px] border-gray-200 text-gray-400'
    }
  ]
});

type ButtonProps = { asChild?: boolean } & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, size, styled, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        disabled={disabled}
        ref={ref}
        className={cn(buttonVariants({ styled, size, disabled, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
