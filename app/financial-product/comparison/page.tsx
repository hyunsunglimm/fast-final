'use client';

import { IsBackHeader } from '@/components/header';
import FilteringSection from './_components/FilteringSection';
import ComparisonSection from './_components/ComparisonSection';
import BottomButton from './_components/BottomButton';
import { useQueryString } from '@/shared/hooks/useQueryString';

const ComparisonPage = () => {
  const { queryValues } = useQueryString();
  const selectedCards = queryValues('card');

  return (
    <>
      <IsBackHeader title='상품비교' href='./?tab=신용카드' defaultColor='#fff' />
      <main className='bg-gray-50 pb-[13.2rem]'>
        <FilteringSection />
        <ComparisonSection />
        {selectedCards.length >= 2 && (
          <BottomButton path='/financial-product/comparison/select-category'>비교하기</BottomButton>
        )}
      </main>
    </>
  );
};

export default ComparisonPage;
