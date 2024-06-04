import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/twMerge';

const switchVariants = cva('', {
  variants: {
    size: {
      default: 'w-[5.1rem] h-[3.1rem]'
    },
    padding: {
      default: 'p-[0.2rem]'
    }
  },
  defaultVariants: {
    size: 'default',
    padding: 'default'
  }
});

type SwitchProps = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  size?: 'default' | 'sm' | 'md' | 'lg';
  padding?: 'default' | 'sm' | 'md' | 'lg';
} & VariantProps<typeof switchVariants>;

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, checked, onChange, className, size, padding, ...props }, ref) => {
    const handleChange = () => {
      onChange(!checked);
    };

    const switchClass = cn(switchVariants({ size, padding }));

    return (
      <label className={`${className} flex items-center`} htmlFor={id}>
        <input
          id={id}
          type='checkbox'
          checked={checked}
          onChange={handleChange}
          ref={ref}
          className='hidden'
          {...props}
        />
        <div
          className={`relative rounded-[10rem] ${switchClass} ${checked ? 'bg-primary' : 'bg-gray-300'}`}
        >
          <div
            className={`absolute h-[2.7rem] w-[2.7rem] transform rounded-full bg-white shadow-sm transition-transform ${checked ? 'right-[0.2rem]' : ' left-[0.2rem]'}`}
          ></div>
        </div>
      </label>
    );
  }
);

Switch.displayName = 'Switch';
export default Switch;
