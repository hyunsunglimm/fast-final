import React from 'react';
import { ExpenseSummaryProps } from '@/shared/types/budgetCalendarType';

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ label, amount }) => {
  const textColorClass = label === '수입' ? 'text-primary' : 'text-gray-700';
  return (
    <div className='w-1/2 rounded-md bg-gray-50 p-16 pb-10'>
      <p className='mb-4 text-14 text-gray-700'>{label}</p>
      <p className={`font-700 ${textColorClass}`}>
        {amount && amount > 0 && '+'}
        {amount?.toLocaleString()}원
      </p>
    </div>
  );
};

export default ExpenseSummary;
