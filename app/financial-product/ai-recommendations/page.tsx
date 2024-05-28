import { IsBackHeader } from '@/components/header';
import AiBanner from './_components/AiBanner';
import PerfectFinancialProductSection from './_components/PerfectFinancialProductSection';
import SpendingHabitsCardSection from './_components/SpendingHabitsCardSection';

const AiRecommendationsPage = () => {
  return (
    <>
      <IsBackHeader title='AI 맞춤' href='./' />
      <AiBanner />
      <PerfectFinancialProductSection />
      <SpendingHabitsCardSection />
    </>
  );
};

export default AiRecommendationsPage;
