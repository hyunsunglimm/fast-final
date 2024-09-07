import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import PricePerCard from './_components/PricePerCard';
import FixedExpensesCard from './_components/FixedExpensesCard';
import TotalPriceCard from './_components/TotalPriceCard';

const UpcomingScheduleSection = () => {
  return (
    <>
      <SectionTitle>다가오고 있는 일정</SectionTitle>
      {/* 달 고정 지출  */}
      <FixedExpensesCard />
      {/* 이번달 전체 카드값 */}
      <TotalPriceCard />
      {/* 카드별 내역  */}
      <PricePerCard />
    </>
  );
};
export default UpcomingScheduleSection;
