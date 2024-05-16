import { cn } from '@/utils/twMerge';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export const buttonVariants = cva('', {
  variants: {
    variant: {
      default: 'bg-black text-white rounded-[0.8rem] px-[1.6rem] h-[4.8rem] text-[1.6rem]'
    },
    size: {
      default: 'w-full',
      sm: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
  }
);

Button.displayName = 'Button';

export default Button;
