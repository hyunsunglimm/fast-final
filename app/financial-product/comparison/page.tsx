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
    <div className='pb-[13.2rem]'>
      <IsBackHeader title='상품비교' href='./' defaultColor='#fff' />
      <FilteringSection />
      <ComparisonSection />
      {selectedCards.length >= 2 && (
        <BottomButton title='비교하기' path='/financial-product/comparison/select-category' />
      )}
    </div>
  );
};

export default ComparisonPage;
