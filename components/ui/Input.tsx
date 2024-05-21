import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import { cn } from '@/utils/twMerge';
import Text from './Text';
import FlexBox from './FlexBox';

// Input 컴포넌트의 스타일 변형을 정의합니다.

const inputVariants = cva(
  'peer block w-full border-gray-500 appearance-none border-0 border-b-2 pb-[0.1rem] pt-4 text-16 focus:outline-none focus:ring-0 bg-transparent disabled:cursor-not-allowed disabled:border-b-gray-300 pr-28',
  {
    variants: {
      validation: {
        default: 'focus:border-active focus:text-active',
        success: 'focus:border-active focus:text-active',
        error: 'focus:border-warning focus:text-warning'
      }
    },
    defaultVariants: {
      validation: 'default'
    },
    compoundVariants: []
  }
);

type InputProps = {
  icon?: (React.JSX.Element | null)[] | React.JSX.Element | null;
  trailingText?: string;
} & VariantProps<typeof inputVariants> &
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, placeholder, validation, className, icon: Icon, trailingText, ...props }: InputProps,
    ref
  ) => {
    return (
      <div className='relative flex w-full items-center'>
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
            'absolute top-5 z-10 origin-[0] -translate-y-8 scale-75 transform text-14 text-gray-600 duration-300',
            validation === 'success' && 'peer-focus:text-active',
            validation === 'error' && 'peer-focus:text-warning',
            'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-disabled:text-gray-300 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4'
          )}
        >
          {placeholder}
        </label>

        {trailingText && (
          <FlexBox className='absolute right-3 h-full pt-3' alignItems='center'>
            <Text sizes='14' className=' text-gray-600'>
              {trailingText}
            </Text>
          </FlexBox>
        )}
        {Icon && (
          <FlexBox className='flex items-center gap-x-4 pe-3'>
            {Array.isArray(Icon) ? (
              Icon.map((item, idx) => {
                return (
                  <button key={idx} type='button' className='flex items-center justify-center'>
                    {item}
                  </button>
                );
              })
            ) : (
              <button type='button' className='flex items-center justify-center'>
                {Icon}
              </button>
            )}
          </FlexBox>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
