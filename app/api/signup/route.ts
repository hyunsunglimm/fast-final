import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const body = await req.json();
  const userId = 'test@test.com';
  await new Promise((res) => setTimeout(res, 1000));
  if (body.id === userId) {
    return NextResponse.json({ message: '이미 가입된 아이디 입니다.' }, { status: 409 });
  }

  return NextResponse.json({ userId, message: '가입 가능한 아이디 입니다.' }, { status: 200 });
};
