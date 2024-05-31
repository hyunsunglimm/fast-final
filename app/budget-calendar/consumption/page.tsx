import React from 'react';
import { IsBackHeader } from '@/components/header';
import Line from '../_components/common/Line';
import MonthlyOverview from './_components/MonthlyOverview';
import MonthSpending from './_components/MonthSpending';
import ExpenseComparison from './_components/ExpenseComparison';
import SpendingCategories from './_components/SpendingCategories';

const ConsumptionPage = () => {
  return (
    <div className='min-h-full bg-white pb-[13.2rem]'>
      <IsBackHeader href='./'></IsBackHeader>
      <main>
        <MonthlyOverview />
        <Line />
        <MonthSpending />
        <Line />
        <ExpenseComparison />
        <Line />
        <SpendingCategories />
      </main>
    </div>
  );
};
export default ConsumptionPage;
