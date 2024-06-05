import { IsBackHeader } from '@/components/header';
import AiBanner from './_components/AiBanner';
import PerfectFinancialProductSection from './_components/PerfectFinancialProductSection';
import SpendingHabitsCardSection from './_components/SpendingHabitsCardSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PORKO | AI 맞춤 추천',
  description: 'PORKO AI 맞춤 추천 페이지'
};

const AiRecommendationsPage = () => {
  return (
    <>
      <IsBackHeader title='AI 맞춤' href='./?tab=신용카드' defaultColor='#f2f4f6' />
      <main className='bg-gray-50'>
        <AiBanner />
        <PerfectFinancialProductSection />
        <SpendingHabitsCardSection />
      </main>
    </>
  );
};

export default AiRecommendationsPage;
