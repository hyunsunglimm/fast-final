'use client';

import { DefaultHeader } from '@/components/header';
import CustomNavigationSection from './_components/CustomNavigationSection';
import FinancialProductBanner from './_components/FinancialProductBanner';
import SpotlightCardSection from './_components/SpotlightCardSection';
import FinancialProductSection from './_components/FinancialProductSection';

const FinancialProductPage = () => {
  return (
    <>
      <DefaultHeader title='상품탐색' defaultColor='#f2f4f6' />
      <main className='bg-gray-50 px-20 pb-[13.2rem]'>
        <FinancialProductBanner />
        <CustomNavigationSection />
        <FinancialProductSection />
        <SpotlightCardSection />
      </main>
    </>
  );
};
export default FinancialProductPage;
