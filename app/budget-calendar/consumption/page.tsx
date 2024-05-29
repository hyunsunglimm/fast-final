import React from 'react';
import { IsBackHeader } from '@/components/header';
import MonthlyOverview from './_components/MonthlyOverview';
import Line from '../_components/common/Line';

const ConsumptionPage = () => {
  return (
    <div className='min-h-full bg-white pb-[13.2rem]'>
      <IsBackHeader href='./'></IsBackHeader>
      <main>
        <MonthlyOverview />
        <Line />
      </main>
    </div>
  );
};
export default ConsumptionPage;
