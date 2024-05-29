import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import { cn } from '@/utils/twMerge';
import Text from './Text';
import FlexBox from './FlexBox';

// Input 컴포넌트의 스타일 변형을 정의합니다.

const inputVariants = cva(
  'peer block w-full appearance-none pb-[0.1rem] pt-4 text-16 focus:outline-none focus:ring-0 bg-transparent disabled:cursor-not-allowed  pr-28',
  {
    variants: {
      border: {
        underline: 'border-gray-500 border-0 border-b-2 disabled:border-b-gray-300',
        nonborder: 'border-none'
      },
      validation: {
        default: 'focus:border-active focus:text-active',
        success: 'focus:border-active focus:text-active',
        error: 'focus:border-warning focus:text-warning'
      }
    },
    defaultVariants: {
      validation: 'default',
      border: 'underline'
    },
    compoundVariants: [
      {
        border: 'nonborder',
        className: 'focus:text-black'
      }
    ]
  }
);

type InputProps = {
  trailingText?: string;
} & VariantProps<typeof inputVariants> &
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      placeholder,
      defaultValue,
      value,
      validation,
      border,
      className,
      trailingText,
      ...props
    }: InputProps,
    ref
  ) => {
    return (
      <div
        className={cn(
          'duration-50 relative flex w-full items-center transition-transform ease-out will-change-transform',
          defaultValue && 'translate-y-3',
          value && 'translate-y-3'
        )}
      >
        <input
          defaultValue={defaultValue}
          value={value}
          {...props}
          ref={ref}
          id={id}
          className={cn(inputVariants({ className, validation, border }))}
          placeholder=' '
        />
        <label
          htmlFor={id}
          className={cn(
            'absolute top-5 z-10 origin-[0] -translate-y-12 scale-75 transform cursor-pointer text-14 text-gray-600 duration-300 will-change-transform',
            validation === 'success' && 'peer-focus:text-active',
            validation === 'error' && 'peer-focus:text-warning',
            'peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-12 peer-focus:scale-75 peer-disabled:text-gray-300 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4'
          )}
        >
          {placeholder}
        </label>

        {trailingText && (
          <FlexBox className='absolute right-3 h-full' alignItems='center'>
            <Text sizes='14' className=' text-gray-600'>
              {trailingText}
            </Text>
          </FlexBox>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
