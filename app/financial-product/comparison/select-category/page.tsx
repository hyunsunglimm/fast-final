import { Metadata } from 'next';
import SelectCategory from './_components/SelectCategory';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'PORKO 비교 기준 항목 선택',
  description: 'PORKO 비교 기준 항목 선택 페이지'
};

type SelectCategoryPageProps = {
  searchParams: Record<string, string | undefined>;
};

const SelectCategoryPage = async ({ searchParams }: SelectCategoryPageProps) => {
  if (!searchParams.card || typeof searchParams.card === 'string') {
    return redirect('/financial-product/comparison?tab1=카드&tab2=신용카드');
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/cards/comparison/result?card=${searchParams.card}`
  );

  const comparisonCards = await res.json();

  return <SelectCategory comparisonCards={comparisonCards} />;
};

export default SelectCategoryPage;
