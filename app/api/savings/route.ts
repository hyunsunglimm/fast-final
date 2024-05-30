import { NextResponse } from 'next/server';

export const GET = async () => {
  await new Promise((res) => setTimeout(res, 2000));

  const savings = [
    {
      bank: '카카오뱅크',
      title: '26주 적금',
      description: '캐릭터와 함께 즐거운 도전',
      rate: '연 6%',
      iconPath: '/icons/logos/bank/bank-kakao.svg',
      startAmount: '5000원',
      endAmount: 1772807
    },
    {
      bank: '기업은행',
      title: 'IBK D-day 적금',
      description: '만기가 자유로운 적금',
      rate: '연 5.15%',
      iconPath: '/icons/logos/bank/bank-ibk.svg',
      startAmount: '월 20만원',
      endAmount: 1215249
    },
    {
      bank: '카카오뱅크',
      title: '굴비 적금',
      description: '부담없이 이용하는 적금',
      rate: '연 5%',
      iconPath: '/icons/logos/bank/bank-kakao.svg',
      startAmount: '월 30만원',
      endAmount: 1822207
    },
    {
      bank: '농협은행',
      title: 'NH올원e미니적금',
      description: '금액과 기간을 자유롭게',
      rate: '연 4.7%',
      iconPath: '/icons/logos/bank/bank-nh.svg',
      startAmount: '월 50만원',
      endAmount: 3034792
    }
  ];

  return NextResponse.json(savings);
};
