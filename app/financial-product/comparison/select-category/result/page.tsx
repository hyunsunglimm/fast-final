import { Metadata } from 'next';
import ComparisonResult from './_components/ComparisonResult';

export const metadata: Metadata = {
  title: 'PORKO 비교 결과',
  description: 'PORKO 비교 결과 페이지'
};

type ComparisonResultPageProps = {
  searchParams: Record<string, string | undefined>;
};

const ComparisonResultPage = async ({ searchParams }: ComparisonResultPageProps) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/cards/comparison/result?card=${searchParams.card}`
  );

  const comparedCards = await res.json();

  return <ComparisonResult comparedCards={comparedCards} />;
};

export default ComparisonResultPage;
