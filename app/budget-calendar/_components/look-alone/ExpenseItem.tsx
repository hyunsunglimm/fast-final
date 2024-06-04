import React from 'react';
import { ExpenseItemProps } from '@/shared/types/budgetCalendarType';
import Icon from '@/components/Icon';

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
      <Icon src={icon} alt={iconDescription} size='40' className='shrink-0' />
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
          <Icon
            src='/icons/categories/background/categories-regret.svg'
            alt='후회'
            className='m-auto mb-6 block'
          />
          <p className='text-12 text-[#7191F3]'>후회 소비</p>
        </div>
      )}
    </li>
  );
};

export default ExpenseItem;
