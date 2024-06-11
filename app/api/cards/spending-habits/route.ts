import { getSpendingHabitsCards } from '@/service/api/financial-product/cards';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const spendingHabitsCards = await getSpendingHabitsCards();
  return NextResponse.json(spendingHabitsCards);
};
