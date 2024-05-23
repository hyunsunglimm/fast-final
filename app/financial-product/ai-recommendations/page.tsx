import { IsBackHeader } from '@/components/header';
import PerfectFinancialProducts from './_components/PerfectFinancialProducts';
import SpendingHabitsCards from './_components/SpendingHabitsCards';
import AiBanner from './_components/AiBanner';

const AiRecommendationsPage = () => {
  return (
    <>
      <IsBackHeader title='AI 맞춤' href='./' />
      <section>
        <AiBanner />
        <PerfectFinancialProducts />
        <SpendingHabitsCards />
      </section>
    </>
  );
};

export default AiRecommendationsPage;
