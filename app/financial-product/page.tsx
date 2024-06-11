import ServerDefaultHeader from '@/components/header/ServerDefaultHeader';
import CustomNavigationSection from './_components/CustomNavigationSection';
import FinancialProductBanner from './_components/FinancialProductBanner';
import SpotlightCardSection from './_components/SpotlightCardSection';
import FinancialProductSection from './_components/FinancialProductSection';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'PORKO 금융상품 탐색',
  description: 'PORKO 금융상품 탐색 페이지'
};

type FinancialProductPageProps = {
  searchParams: Record<string, string | undefined>;
};

const FinancialProductPage = ({ searchParams }: FinancialProductPageProps) => {
  if (!searchParams.tab) {
    return redirect('/financial-product?tab=신용카드');
  }

  return (
    <>
      <ServerDefaultHeader title='상품탐색' defaultColor='#f2f4f6' />
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
