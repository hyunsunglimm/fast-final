import { IsBackHeader } from '@/components/header';
import AiBanner from './_components/AiBanner';
import PerfectFinancialProductSection from './_components/PerfectFinancialProductSection';
import SpendingHabitsCardSection from './_components/SpendingHabitsCardSection';
import { Suspense } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Spinner from '@/components/Spinner';

const AiRecommendationsPage = () => {
  return (
    <>
      <IsBackHeader title='AI 맞춤' href='./?tab=신용카드' defaultColor='#f2f4f6' />
      <main className='bg-gray-50'>
        <AiBanner />
        <Suspense
          fallback={
            <FlexBox justifyContent='center'>
              <Spinner />
            </FlexBox>
          }
        >
          <PerfectFinancialProductSection />
        </Suspense>
        <SpendingHabitsCardSection />
      </main>
    </>
  );
};

export default AiRecommendationsPage;
