import { NextResponse } from 'next/server';

const spendingHabitsCards = [
  {
    title: '하나은행',
    cardName: '카카오페이 CHECK',
    image: 'hana-kakao-pay-card-width1',
    conditions: ['전월실적 25만원 이상', '연회비 1만원'],
    benefits: [
      {
        title: '대중교통',
        iconPath: '/icons/system-icon/system/card-bus.svg',
        detail: '대중교통 5% 캐시백'
      },
      {
        title: '카카오페이',
        iconPath: '/icons/system-icon/system/card-pay.svg',
        detail: '카카오페이 7% 캐시백'
      },
      {
        title: '스타벅스',
        iconPath: '/icons/system-icon/system/card-cafe.svg',
        detail: '스타벅스 5% 캐시백'
      }
    ]
  },
  {
    title: '토스은행',
    cardName: '토스페이 NICE',
    image: 'hana-kakao-pay-card-width2',
    conditions: ['전월실적 50만원 이상', '연회비 2만원'],
    benefits: [
      {
        title: '대중교통',
        iconPath: '/icons/system-icon/system/card-bus.svg',
        detail: '대중교통 10% 캐시백'
      },
      {
        title: '카카오페이',
        iconPath: '/icons/system-icon/system/card-pay.svg',
        detail: '카카오페이 14% 캐시백'
      },
      {
        title: '스타벅스',
        iconPath: '/icons/system-icon/system/card-cafe.svg',
        detail: '스타벅스 10% 캐시백'
      }
    ]
  },
  {
    title: '기업은행',
    cardName: '기업페이 GOOD',
    image: 'hana-kakao-pay-card-width3',
    conditions: ['전월실적 75만원 이상', '연회비 3만원'],
    benefits: [
      {
        title: '대중교통',
        iconPath: '/icons/system-icon/system/card-bus.svg',
        detail: '대중교통 15% 캐시백'
      },
      {
        title: '카카오페이',
        iconPath: '/icons/system-icon/system/card-pay.svg',
        detail: '카카오페이 21% 캐시백'
      },
      {
        title: '스타벅스',
        iconPath: '/icons/system-icon/system/card-cafe.svg',
        detail: '스타벅스 15% 캐시백'
      }
    ]
  }
];

export const GET = async () => {
  await new Promise((res) => setTimeout(res, 2000));
  return NextResponse.json(spendingHabitsCards);
};
