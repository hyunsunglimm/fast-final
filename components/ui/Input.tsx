import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import { cn } from '@/utils/twMerge';

// Input 컴포넌트의 스타일 변형을 정의합니다.

const inputVariants = cva(
  'peer block w-full border-gray-500 appearance-none border-0 border-b-2 px-2.5 pb-2.5 pt-5 text-16 focus:outline-none focus:ring-0 bg-transparent disabled:cursor-not-allowed disabled:border-b-gray-300',
  {
    variants: {
      validation: {
        success: 'focus:border-active focus:text-active',
        error: 'focus:border-warning focus:text-warning'
      }
    },
    defaultVariants: {},
    compoundVariants: []
  }
);

type InputProps = VariantProps<typeof inputVariants> & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, placeholder, validation, className, ...props }: InputProps, ref) => {
    return (
      <div className='relative'>
        <input
          {...props}
          ref={ref}
          id={id}
          className={cn(inputVariants({ className, validation }))}
          placeholder=' '
        />
        <label
          htmlFor={id}
          className={cn(
            'absolute start-2.5 top-5 z-10 origin-[0] -translate-y-8 scale-75 transform text-16 duration-300',
            validation === 'success' && 'peer-focus:text-active',
            validation === 'error' && 'peer-focus:text-warning',
            'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-disabled:text-gray-300 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4'
          )}
        >
          {placeholder}
        </label>
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
