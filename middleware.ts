/**
 * 인증 및 권한 부여 ,서버 측 리디렉션, 경로 재작성
 */
const middleware = () => {};
export default middleware;
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};
