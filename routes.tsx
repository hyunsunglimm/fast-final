/**
 * 기본 라우트
 */
export const publicRoutes: string[] = [
  '/',
  '/asset-management/:path*',
  '/budget-calendar/:path*',
  '/financial-product/:path*'
];

/**
 * 로그인한 사용자가 이 경로로 접근시 /home으로 리디렉션
 */
export const authRoutes: string[] = ['/auth/signup', '/auth/signin'];

/**
 *
 */
