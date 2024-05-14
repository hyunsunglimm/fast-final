import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import { cn } from '@/utils/twMerge';

// Input 컴포넌트의 스타일 변형을 정의합니다.
const inputVariants = cva('placeholder-black-opacity-30 outline-none', {
  variants: {
    size: {
      sm: 'input-sm',
      md: 'w-full h-[5.6rem] border-black px-[1.6rem]',
      lg: 'input-lg'
    },
    radius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg'
    },
    borderType: {
      all: 'border',
      all2: 'border-2',
      bottom: 'border-b rounded-none',
      bottom2: 'border-b-2 rounded-none',
      none: 'border-none'
    },
    fontSize: {
      sm: 'text-sm',
      md: 'text-20',
      lg: 'text-lg'
    },
    action: {
      active: 'focus:border-active',
      error: 'focus:border-red-500'
    }
  },
  defaultVariants: {
    size: 'md',
    radius: 'md',
    borderType: 'all',
    fontSize: 'md',
    action: 'active'
  }
});

type BoxVariantSize = 'sm' | 'md' | 'lg';

type InputProps = {
  size?: BoxVariantSize;
  radius?: BoxVariantSize;
  borderType?: 'all' | 'all2' | 'bottom' | 'bottom2' | 'none';
  fontSize?: 'sm' | 'md' | 'lg';
  action?: 'active' | 'error';
  className?: string;
} & VariantProps<typeof inputVariants> &
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, radius, borderType, fontSize, action, className, ...props }: InputProps, ref) => {
    const inputClass = cn(inputVariants({ size, radius, borderType, fontSize, action, className }));

    return <input {...props} ref={ref} className={inputClass} />;
  }
);

Input.displayName = 'Input';
export default Input;
