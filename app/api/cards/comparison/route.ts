import { getFilteredCards } from '@/service/api/financial-product/cards';
import { BenefitCategories, CardCompany } from '@/shared/types/response/card';
import { CARD_BENEFIT_CATEGORIES } from '@/shared/utils/financial-product/staticData';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const type =
    searchParams.get('type') === '신용카드'
      ? 'credit'
      : searchParams.get('type') === '체크카드'
        ? 'check'
        : '';
  const company = searchParams.get('company')?.split(',');
  const category = searchParams.get('category')?.split(',');
  const categoryEn =
    category &&
    category.map((c) => CARD_BENEFIT_CATEGORIES.find((cate) => cate.title_kr === c)?.title_en);

  if (!type) {
    return new Response('bad request', { status: 400 });
  }

  const filteredCards = await getFilteredCards(
    type,
    company as CardCompany[],
    categoryEn as BenefitCategories[]
  );
  return NextResponse.json(filteredCards);
};
