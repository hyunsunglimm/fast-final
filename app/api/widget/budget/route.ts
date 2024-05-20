import { NextResponse } from 'next/server';
export type BudgetDataType =
  | {
      month: number;
      reactionCount: number;
      used: number;
      remainingCost: number;
    }
  | { message: string };

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const month = searchParams.get('month');
  let data: BudgetDataType;

  switch (month) {
    case '3':
      data = {
        month: 3,
        reactionCount: 10,
        used: 10,
        remainingCost: 80000
      };
      break;
    case '4':
      data = {
        month: 5,
        reactionCount: 20,
        used: 80,
        remainingCost: 120000
      };
      break;
    case '5':
      data = {
        month: 6,
        reactionCount: 15,
        used: 90,
        remainingCost: 90000
      };
      break;
    default:
      data = {
        message: 'No data available for the specified month'
      };
      break;
  }

  return NextResponse.json(data);
};
