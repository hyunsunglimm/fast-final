import React from 'react';
import { IsBackHeader } from '@/components/header';
import Line from '../_components/common/Line';
import MonthlyOverview from './_components/MonthlyOverview';
import MonthSpending from './_components/MonthSpending';
import ExpenseComparison from './_components/ExpenseComparison';
import SpendingCategories from './_components/SpendingCategories';
import ConsumptionWeather from '../_components/shared/ConsumptionWeather';
import RegretSpending from '../_components/shared/RegretSpending';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
import { auth } from '@/auth';

const ConsumptionPage = async () => {
  const userData = await auth();
  if (!userData) {
    return <LoadingBackdrop />;
  }

  const transformedUser = {
    memberId: Number(userData.user?.id),
    name: userData.user?.name || '???',
    profileImageUrl: userData.user?.image || '/icons/profile/profile.svg'
  };
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
        {userData.user && (
          <>
            <ConsumptionWeather selectedProfile={transformedUser} />
            <Line />
            <RegretSpending selectedProfile={transformedUser} />
          </>
        )}
      </main>
    </div>
  );
};
export default ConsumptionPage;
