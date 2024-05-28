'use client';

import { DefaultHeader } from '@/components/header';
import CustomNavigationSection from './_components/CustomNavigationSection';
import FinancialProductBanner from './_components/FinancialProductBanner';
import SpotlightCardSection from './_components/SpotlightCardSection';
import FinancialProductSection from './_components/FinancialProductSection';

const FinancialProductPage = () => {
  return (
    <>
      <DefaultHeader title='상품탐색' />
      <div className='px-20 pb-[13.2rem]'>
        <FinancialProductBanner />
        <CustomNavigationSection />
        <FinancialProductSection />
        <SpotlightCardSection />
      </div>
    </>
  );
};
export default FinancialProductPage;
