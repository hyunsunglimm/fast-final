import { NextResponse } from 'next/server';
export const GET = async () => {
  const MyWalletData = [
    {
      bank: 'kakao',
      bankBookName: '생활비통장',
      amount: 763750,
      lastDeposit: 56000,
      lasSpending: 0,
      iconSrc: '/icons/logos/bank/bank-kakao.svg'
    },
    {
      bank: 'shinhan',
      bankBookName: '신한 주거래 우대통장',
      amount: 562050,
      lastDeposit: 0,
      lasSpending: 23000,
      iconSrc: '/icons/logos/bank/bank-shinhan.svg'
    },
    {
      bank: 'kb',
      bankBookName: 'KB마이핏통장',
      amount: 240210,
      lastDeposit: 40000,
      lasSpending: 0,
      iconSrc: '/icons/logos/bank/bank-kb.svg'
    },
    {
      bank: 'woori',
      bankBookName: '우리통장',
      amount: 240210,
      lastDeposit: 40000,
      lasSpending: 0,
      iconSrc: '/icons/logos/bank/bank-woori.svg'
    },
    {
      bank: 'nh',
      bankBookName: '농협통장',
      amount: 240210,
      lastDeposit: 40000,
      lasSpending: 0,
      iconSrc: '/icons/logos/bank/bank-nh.svg'
    },
    {
      bank: 'hana',
      bankBookName: '하나통장',
      amount: 240210,
      lastDeposit: 40000,
      lasSpending: 0,
      iconSrc: '/icons/logos/bank/bank-hana.svg'
    },
    {
      bank: 'lotte',
      bankBookName: '롯데통장',
      amount: 240210,
      lastDeposit: 40000,
      lasSpending: 0,
      iconSrc: '/icons/logos/bank/bank-lotte.svg'
    },
    {
      bank: 'lotte',
      bankBookName: '롯데통장',
      amount: 240210,
      lastDeposit: 40000,
      lasSpending: 0,
      iconSrc: '/icons/logos/bank/bank-lotte.svg'
    }
  ];
  await new Promise((res) => setTimeout(res, 2000));
  return NextResponse.json(MyWalletData);
};
