import React, { forwardRef, InputHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/twMerge';
import Icon from '../Icon';

const checkboxVariants = cva('', {
  variants: {
    sizes: {
      '12': '12',
      '16': '16',
      '20': '20',
      '24': '24'
    }
  },
  defaultVariants: {
    sizes: '16'
  }
});

type CheckboxProps = {
  childrenPosition?: 'left' | 'right';
  onImage?: string;
  offImage?: string;
} & VariantProps<typeof checkboxVariants> &
  InputHTMLAttributes<HTMLInputElement>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      children,
      className,
      sizes,
      id,
      childrenPosition = 'right',
      onImage = '/icons/system-icon/checkbox/round-checkbox-on.svg',
      offImage = '/icons/system-icon/checkbox/round-checkbox-off.svg',
      ...props
    },
    ref
  ) => {
    const containerClass = cn('flex items-center justify-center', className);
    const { checked } = props;
    const imageSrc = checked ? onImage : offImage;

    return (
      <label className={containerClass} htmlFor={id}>
        <input {...props} type='checkbox' ref={ref} className='hidden' id={id} />
        {childrenPosition === 'left' && <>{children}</>}
        <Icon src={imageSrc} alt='Checkbox' size={sizes || '16'} placeholder='empty' />
        {childrenPosition === 'right' && <>{children}</>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
