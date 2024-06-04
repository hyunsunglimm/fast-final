import React from 'react';
import { ExpenseSummaryProps } from '@/service/types/budgetCalendarType';

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ label, amount }) => {
  return (
    <div className='w-1/2 rounded-md bg-gray-50 p-16 pb-10'>
      <p className='mb-4 text-14 text-gray-700'>{label}</p>
      <p className='font-700'>{amount}원</p>
    </div>
  );
};

export default ExpenseSummary;
