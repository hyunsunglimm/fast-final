import React from 'react';
import { SvgComponentProps } from '@/types/svgComponentProps';

const DeleteIcon = ({ ...props }: SvgComponentProps) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      className='h-[2rem] w-[2rem]'
      // width='20rem'
      // height='20rem'
      viewBox='0 0 20 20'
      fill='none'
    >
      <circle cx='10' cy='10' r='10' fill='#747A81' />
      <path
        d='M14 6L6 14M6 6L14 14'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default DeleteIcon;
