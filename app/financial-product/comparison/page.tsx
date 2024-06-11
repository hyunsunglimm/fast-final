import { IsBackHeader } from '@/components/header';
import FilteringSection from './_components/FilteringSection';
import ComparisonSection from './_components/ComparisonSection';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'PORKO 상품 비교',
  description: 'PORKO 상품 비교 페이지'
};

type ComparisonPageProps = {
  searchParams: Record<string, string | undefined>;
};

const ComparisonPage = ({ searchParams }: ComparisonPageProps) => {
  if (!searchParams.tab1 || !searchParams.tab2) {
    return redirect('/financial-product/comparison?tab1=카드&tab2=신용카드');
  }

  return (
    <div>
      <IsBackHeader title='상품비교' href='./?tab=신용카드' defaultColor='#fff' />
      <main className='min-h-dvh bg-gray-50 pb-[13.2rem]'>
        <FilteringSection />
        <ComparisonSection />
      </main>
    </div>
  );
};

export default ComparisonPage;
