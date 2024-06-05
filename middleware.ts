import { NextResponse, NextRequest } from 'next/server';

/**
 * 인증 및 권한 부여 ,서버 측 리디렉션, 경로 재작성
 */
const middleware = (request: NextRequest) => {
  /** /create-bucket으로 접속할 경우 step=1로 주소 바꿈 */
  if (request.nextUrl.pathname === '/create-bucket' && !request.nextUrl.searchParams.get('step')) {
    return NextResponse.redirect(new URL('/create-bucket?step=1', request.url));
  }
  /** /bucket-landing으로 접속할 경우 tab=저축생활+1편으로 주소 바꿈 */
  if (request.nextUrl.pathname === '/bucket-landing' && !request.nextUrl.searchParams.get('tab')) {
    return NextResponse.redirect(new URL('/bucket-landing?tab=저축생활+1편', request.url));
  }
};
export default middleware;
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};
