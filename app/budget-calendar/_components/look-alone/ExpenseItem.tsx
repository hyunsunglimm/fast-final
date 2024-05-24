import React from 'react';
import Image from 'next/image';
import { ExpenseItemProps } from '@/types/budgetCalendarType';

const ExpenseItem: React.FC<ExpenseItemProps> = ({
  icon,
  iconDescription,
  amount,
  payment,
  method,
  regret
}) => {
  return (
    <li className='mt-24 flex items-center justify-between gap-[1.6rem]'>
      <div className='relative h-[4rem] w-[4rem] shrink-0'>
        <Image src={icon} alt={iconDescription} fill />
      </div>
      <div className='w-full'>
        <p className='mb-4 font-700'>{amount}</p>
        <div className='flex gap-[0.2rem] text-12 text-gray-500'>
          <p>{payment}</p>
          <p>|</p>
          <p>{method}</p>
        </div>
      </div>
      {regret && (
        <div className='shrink-0'>
          <div className='relative m-auto mb-6 h-[2.4rem] w-[2.4rem]'>
            <Image src='/icons/categories/background/categories-regret.svg' alt='후회 소비' fill />
          </div>
          <p className='text-12 text-[#7191F3]'>후회 소비</p>
        </div>
      )}
    </li>
  );
};

export default ExpenseItem;
