import React from 'react';
import { IsBackHeader } from '@/components/header';
import MonthlyOverview from './_components/MonthlyOverview';
import MonthSpending from './_components/MonthSpending';
import Line from '../_components/common/Line';

const ConsumptionPage = () => {
  return (
    <div className='min-h-full bg-white pb-[13.2rem]'>
      <IsBackHeader href='./'></IsBackHeader>
      <main>
        <MonthlyOverview />
        <Line />
        <MonthSpending />
        <Line />
      </main>
    </div>
  );
};
export default ConsumptionPage;
