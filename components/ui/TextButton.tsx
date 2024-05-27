import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/twMerge';
import { Slot } from '@radix-ui/react-slot';

type TextButtonProps = {
  children: React.ReactNode;
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ children, asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        {...props}
        className={cn('text-14 underline-offset-4 hover:underline', className)}
      >
        {children}
      </Comp>
    );
  }
);

TextButton.displayName = 'TextButton';
export default TextButton;
