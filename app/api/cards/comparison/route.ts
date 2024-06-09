import { FILTERINGS } from '@/app/financial-product/comparison/_components/SelectFiltering';
import { getFilteredCards } from '@/service/api/financial-product/cards';
import { BenefitCategories, CardCompany } from '@/shared/types/response/card';
import { CARD_COMPANIES } from '@/shared/utils/financial-product/staticData';
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

  const isValidCompany = company?.every((c) => CARD_COMPANIES.includes(c));
  const isValidCategory = category?.every((c) => FILTERINGS.includes(c));

  if (!type || !isValidCompany || !isValidCategory) {
    return new Response('bad request', { status: 400 });
  }

  const filteredCards = await getFilteredCards(
    type,
    company as CardCompany[],
    category as BenefitCategories[]
  );
  return NextResponse.json(filteredCards);
};
