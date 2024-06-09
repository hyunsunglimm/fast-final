import { NextResponse } from 'next/server';

const creditCards = [
  {
    title: '카카오뱅크 신한카드 Time',
    annualBenefits: 100602,
    annualFee: '연회비 1만원',
    image: 'kakao-shinhan-time',
    isEvent: false
  },
  {
    title: '신한카드 Mr.Life',
    annualBenefits: 91162,
    annualFee: '연회비 1만 5천원',
    image: 'shinhan-mrlife',
    isEvent: false
  },
  {
    title: '카카오페이 신한 라이언',
    annualBenefits: 80000,
    annualFee: '연회비 이벤트',
    image: 'kakao-shinhan-lion',
    isEvent: true
  }
];

const checkCards = [
  {
    title: 'BC 바로 클리어 플러스',
    annualBenefits: 71165,
    annualFee: '연회비 1만원',
    image: 'bc-clear-plus',
    isEvent: false
  },
  {
    title: 'BC 바로 클리어',
    annualBenefits: 56428,
    annualFee: '연회비 이벤트',
    image: 'balance',
    isEvent: true
  }
];

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  const data =
    type === '신용카드'
      ? creditCards
      : type === '체크카드'
        ? checkCards
        : [...creditCards, ...checkCards];

  return NextResponse.json(data);
};
