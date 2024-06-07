import { NextResponse, NextRequest } from 'next/server';
import { auth } from './auth';

/**
 * 인증 및 권한 부여 ,서버 측 리디렉션, 경로 재작성
 */
const middleware = async (request: NextRequest) => {
  /** /create-bucket으로 접속할 경우 step=1로 주소 바꿈 */
  if (request.nextUrl.pathname === '/create-bucket' && !request.nextUrl.searchParams.get('step')) {
    return NextResponse.redirect(new URL('/create-bucket?step=1', request.url));
  }
  /** /bucket-landing으로 접속할 경우 tab=저축생활+1편으로 주소 바꿈 */
  if (request.nextUrl.pathname === '/bucket-landing' && !request.nextUrl.searchParams.get('tab')) {
    return NextResponse.redirect(new URL('/bucket-landing?tab=저축생활+1편', request.url));
  }

  // 사용자 검증
  // const allowedPaths = ['/auth/login', '/auth/signup'];
  // const session = await auth();
  // const { pathname } = request.nextUrl;

  // if (!session && !allowedPaths.includes(pathname)) {
  //   const loginUrl = new URL('/auth/login', request.url);
  //   return NextResponse.redirect(loginUrl);
  // }
  // 비교결과 페이지에 선택한 카드나 항목에 대한 쿼리스트링이 없다면 카드 선택 페이지로 이동
  if (
    request.nextUrl.pathname === '/financial-product/comparison/select-category/result' &&
    (request.nextUrl.searchParams.getAll('card').length < 2 ||
      request.nextUrl.searchParams.getAll('card').includes('') ||
      request.nextUrl.searchParams.getAll('category').length < 2 ||
      request.nextUrl.searchParams.getAll('category').includes(''))
  ) {
    return NextResponse.redirect(
      new URL('/financial-product/comparison?tab1=카드&tab2=신용카드', request.url)
    );
  }
};
export default middleware;
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};
