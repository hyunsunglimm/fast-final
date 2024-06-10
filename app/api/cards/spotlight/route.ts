import { getSpotlightCards } from '@/service/api/financial-product/cards';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const type =
    searchParams.get('type') === '신용카드'
      ? 'credit'
      : searchParams.get('type') === '체크카드'
        ? 'check'
        : '';

  if (!type) {
    return new Response('bad request', { status: 400 });
  }
  console.log('type: ', type);

  const spotlightCards = await getSpotlightCards(type);

  return NextResponse.json(spotlightCards);
};
