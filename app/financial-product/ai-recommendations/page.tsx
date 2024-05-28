import { IsBackHeader } from '@/components/header';
import AiBanner from './_components/AiBanner';
import PerfectFinancialProductSection from './_components/PerfectFinancialProductSection';
import SpendingHabitsCardSection from './_components/SpendingHabitsCardSection';

const AiRecommendationsPage = () => {
  return (
    <>
      <IsBackHeader title='AI 맞춤' href='./' defaultColor='#f2f4f6' />
      <main className='bg-gray-50'>
        <AiBanner />
        <PerfectFinancialProductSection />
        <SpendingHabitsCardSection />
      </main>
    </>
  );
};

export default AiRecommendationsPage;
