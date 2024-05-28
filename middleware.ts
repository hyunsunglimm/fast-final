import { NextResponse, NextRequest } from 'next/server';

/**
 * 인증 및 권한 부여 ,서버 측 리디렉션, 경로 재작성
 */
const middleware = (request: NextRequest) => {
  if (request.nextUrl.pathname === '/create-bucket' && !request.nextUrl.searchParams.get('step')) {
    return NextResponse.rewrite(new URL('/create-bucket?step=1', request.url));
  }
};
export default middleware;
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};
