'use client';

import { IsBackHeader } from '@/components/header';
import FilteringSection from './_components/FilteringSection';
import ComparisonSection from './_components/ComparisonSection';
import BottomButton from './_components/BottomButton';
import { useSearchParams } from 'next/navigation';

const ComparisonPage = () => {
  const searchParams = useSearchParams();
  const selectedCards = searchParams.getAll('card');

  return (
    <>
      <IsBackHeader title='상품비교' href='./' />
      <section className='relative pb-[13.2rem]'>
        <FilteringSection />
        <ComparisonSection />
      </section>
      {selectedCards.length >= 2 && (
        <BottomButton title='비교하기' path='/financial-product/comparison/select-category' />
      )}
    </>
  );
};

export default ComparisonPage;
