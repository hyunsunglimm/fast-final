import { getSpotlightCards } from '@/service/api/financial-product/cards';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  const convertedType = type === '신용카드' ? 'credit' : type === '체크카드' ? 'check' : '';

  if (convertedType !== 'credit' && convertedType !== 'check') {
    return new Response('bad request', { status: 400 });
  }

  const spotlightCards = await getSpotlightCards(convertedType);

  return NextResponse.json(spotlightCards);
};
