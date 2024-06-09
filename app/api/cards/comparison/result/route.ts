import { NextResponse } from 'next/server';

const comparedCards = [
  {
    id: 0,
    annualBenefit: 550020,
    name: '카카오뱅크 신한카드 Time',
    monthlyBenefit: 45835,
    discountLimit: '5만원',
    annualFee: '1만원',
    prevMonthPerformance: '최소 50만원',
    benefits: ['1만원 스트리밍', '1만원 영화', '1만원 배달'],
    diffByStandardA: '월 5천원',
    diffByStandardB: '더 많은 가맹점'
  },
  {
    id: 1,
    annualBenefit: 345000,
    name: '신한카드 Mr.Life',
    monthlyBenefit: 28750,
    discountLimit: '3만 2천원',
    annualFee: '1만 5천원',
    prevMonthPerformance: '최소 50만원',
    benefits: ['1만원 편의점', '1만원 병원/약국', '1만원 온라인쇼핑'],
    diffByStandardA: '월 5천원',
    diffByStandardB: '2개의 가맹점'
  }
];

export const GET = async () => {
  return NextResponse.json(comparedCards);
};
