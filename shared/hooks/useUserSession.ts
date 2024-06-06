import { useSession } from 'next-auth/react';

// 클라이언트 컴포넌트에서 token 호출 Hook
export const useUserSession = () => {
  const session = useSession();

  return session.data?.user;
};
