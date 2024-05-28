'use client';

import { DefaultHeader } from '@/components/header';
import CustomNavigation from './_components/CustomNavigation';
import FinancialProducts from './_components/FinancialProducts';
import SpotlightCards from './_components/SpotlightCards';
import FinancialProductBanner from './_components/FinancialProductBanner';

const FinancialProductPage = () => {
  return (
    <div className=''>
      <DefaultHeader title='상품탐색' />
      <div className='px-20 pb-[13.2rem]'>
        <FinancialProductBanner />
        <CustomNavigation />
        <FinancialProducts />
        <SpotlightCards />
      </div>
    </div>
  );
};
export default FinancialProductPage;
