import { cn } from '@/shared/utils/twMerge';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

export const iconButtonVariants = cva(
  'flex items-center justify-center active:bg-slate-50/10 cursor-pointer ',
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed',
        false: ''
      }
    },
    defaultVariants: {
      disabled: false
    }
  }
);

type IconButtonProps = { asChild?: boolean } & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof iconButtonVariants>;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, disabled, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        disabled={disabled}
        ref={ref}
        className={cn(iconButtonVariants({ disabled, className }))}
        {...props}
      />
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
