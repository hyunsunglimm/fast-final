import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = [
    { bank: '토스', amount: 42000, imgSrc: '/icons/logos/bank/bank-toss.svg' },
    { bank: '카카오뱅크', amount: 200000, imgSrc: '/icons/logos/bank/bank-kakao.svg' },
    { bank: '기업은행', amount: 135000, imgSrc: '/icons/logos/bank/bank-ibk.svg' },
    { bank: '국민은행', amount: 26000, imgSrc: '/icons/logos/bank/bank-kb.svg' },
    { bank: '우리은행', amount: 36000, imgSrc: '/icons/logos/bank/bank-woori.svg' },
    { bank: '신한은행', amount: 2226000, imgSrc: '/icons/logos/bank/bank-shinhan.svg' }
  ];
  await new Promise((res) => setTimeout(res, 2000));
  return NextResponse.json(data);
};
