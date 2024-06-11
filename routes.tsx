/**
 * 로그인 안 한 사용자 접근 가능 라우트
 */
export const publicRoutes: string[] = ['/', '/financial-product'];

/**
 * 바텀 네비가 보여야 할 주소
 */
export const navBarRoutes: string[] = [
  '/',
  '/asset-management/:path*',
  '/budget-calendar/:path*',
  '/financial-product',
  '/notification'
];

/**
 * 로그인 안 한 사용자가 이 경로 접근시 '/auth/login'으로 리디렉션
 */
export const protectedRoutes: string[] = [
  '/bucket-detail',
  '/edit-widget',
  '/asset-management/:path*',
  '/budget-calendar/:path*',
  '/bucket-landing',
  '/create-bucket/:path*',
  '/financial-product/ai-recommendations',
  '/notification'
];

/**
 * 로그인 한 사용자가 이 경로로 접근시 '/'으로 리디렉션
 */
export const authRedirectRoutes: string[] = ['/auth/signup', '/auth/login'];

export const apiAuthPrefix: string = '/api/auth';
