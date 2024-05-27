import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = [
    {
      showWidget: [
        { id: 'a', title: '이번달 남은 예산' },
        { id: 'b', title: '다가오는 지출' },
        { id: 'c', title: '저번달에 쓴 돈' },
        { id: 'd', title: '?월 현재 소비' },
        { id: 'e', title: '이번달 카드실적' },
        { id: 'g', title: 'hide 1' }
      ],
      hideWidget: [
        { id: 'f', title: '나의 신용점수' },
        { id: 'h', title: 'hide 2' },
        { id: 'i', title: 'hide 3' },
        { id: 'j', title: 'hide 4' }
      ]
    }
  ];
  await new Promise((res) => setTimeout(res, 3000));
  return NextResponse.json(data);
};

export const POST = async (body: any) => {};
