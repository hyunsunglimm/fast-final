import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import { cn } from '@/utils/twMerge';

const checkboxVariants = cva('', {
  variants: {
    size: {
      default: 'w-[2rem] h-[2rem]',
      md: 'w-[4rem] h-[4rem]'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

const containerVariants = cva('', {
  variants: {
    fontSize: {
      sm: 'text-sm',
      md: 'text-16'
    }
  },
  defaultVariants: {
    fontSize: 'md'
  }
});

type CheckboxProps = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  CantainerClass?: string;
  size?: 'default' | 'sm' | 'md' | 'lg';
  fontSize?: 'sm' | 'md';
  childrenPosition?: 'left' | 'right';
  onImage?: 'onImage' | 'greenImage';
  offImage?: string | 'none';
  greenImage?: string;
} & VariantProps<typeof checkboxVariants>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      checked,
      onChange,
      children,
      className,
      size,
      fontSize,
      childrenPosition = 'right',
      onImage = '/images/checkbox-on.svg',
      offImage = '/images/checkbox-off.svg',
      greenImage = '/images/checkbox-green.svg'
    },
    ref
  ) => {
    const handleChange = () => {
      onChange(!checked);
    };

    const checkboxClass = cn(checkboxVariants({ size }));
    const containerClass = cn(containerVariants({ fontSize }));
    const imageSrc = checked
      ? onImage === 'greenImage'
        ? greenImage
        : onImage
      : offImage === 'none'
        ? undefined
        : offImage;

    return (
      <label className={`${className} flex items-center ${containerClass}`} htmlFor={id}>
        <input
          id={id}
          type='checkbox'
          checked={checked}
          onChange={handleChange}
          ref={ref}
          className='hidden'
        />
        {childrenPosition === 'left' && <>{children}</>}
        <div className={`relative ${checkboxClass}`}>
          {imageSrc && <Image src={imageSrc} alt='Checkbox' layout='fill' />}
        </div>
        {childrenPosition === 'right' && <>{children}</>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
