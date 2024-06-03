import React from 'react';
import { IsBackHeader } from '@/components/header';
import Line from '../_components/common/Line';
import MonthlyOverview from './_components/MonthlyOverview';
import MonthSpending from './_components/MonthSpending';
import ExpenseComparison from './_components/ExpenseComparison';
import SpendingCategories from './_components/SpendingCategories';
import ConsumptionWeather from '../_components/shared/ConsumptionWeather';
import RegretSpending from '../_components/shared/RegretSpending';

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
        <Line />
        <ConsumptionWeather selectedProfile={'ㅇㅇㅇ'} />
        <Line />
        <RegretSpending />
      </main>
    </div>
  );
};
export default ConsumptionPage;
