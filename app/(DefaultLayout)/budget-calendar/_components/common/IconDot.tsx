import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const dotVariants = cva('', {
  variants: {
    color: {
      primary: 'bg-primary',
      blue: 'bg-[#5A7EFF]',
      green: 'bg-[#8DD248]',
      red: 'bg-[#FF5C46]',
      yellow: 'bg-[#FFD34C]'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
});

type IconDotProps = VariantProps<typeof dotVariants> & HTMLAttributes<HTMLDivElement>;

const IconDot: React.FC<IconDotProps> = ({ color }) => {
  return (
    <div className={`mr-8 h-[0.8rem] w-[0.8rem] rounded-full ${dotVariants({ color })}`}></div>
  );
};

export default IconDot;
