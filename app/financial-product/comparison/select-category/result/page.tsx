import { Metadata } from 'next';
import ComparisonResult from './_components/ComparisonResult';
import { redirect } from 'next/navigation';
import { CARD_BENEFIT_CATEGORIES } from '@/shared/utils/financial-product/staticData';

export const metadata: Metadata = {
  title: 'PORKO 비교 결과',
  description: 'PORKO 비교 결과 페이지'
};

type ComparisonResultPageProps = {
  searchParams: Record<string, string | undefined>;
};

const ComparisonResultPage = async ({ searchParams }: ComparisonResultPageProps) => {
  const categories = CARD_BENEFIT_CATEGORIES.map((c) => c.title_kr);
  const redirectUrl = '/financial-product/comparison?tab1=카드&tab2=신용카드';

  if (typeof searchParams.category === 'undefined') {
    return redirect(redirectUrl);
  }

  if (typeof searchParams.category === 'string' && !categories.includes(searchParams.category)) {
    return redirect(redirectUrl);
  }

  if (
    Array.isArray(searchParams.category) &&
    searchParams.category.every((c) => categories.includes(c))
  ) {
    return redirect(redirectUrl);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/cards/comparison/result?card=${searchParams.card}`
  );

  const comparedCards = await res.json();

  if (comparedCards.length < 2) {
    return redirect(redirectUrl);
  }

  return <ComparisonResult comparedCards={comparedCards} />;
};

export default ComparisonResultPage;
