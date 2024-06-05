import { IsBackHeader } from '@/components/header';
import FilteringSection from './_components/FilteringSection';
import ComparisonSection from './_components/ComparisonSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PORKO | 상품 비교',
  description: 'PORKO 상품 비교 페이지'
};

const ComparisonPage = () => {
  return (
    <>
      <IsBackHeader title='상품비교' href='./?tab=신용카드' defaultColor='#fff' />
      <main className='bg-gray-50 pb-[13.2rem]'>
        <FilteringSection />
        <ComparisonSection />
      </main>
    </>
  );
};

export default ComparisonPage;
