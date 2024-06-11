import { getSelectedCardsById } from '@/service/api/financial-product/cards';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const cardIds = searchParams.get('card')?.split(',');

  if (typeof cardIds !== 'object') {
    return new Response('bad request1', { status: 400 });
  }

  const comparisonCards = await getSelectedCardsById(cardIds);

  return NextResponse.json(comparisonCards);
};
