import { mySignIn } from '@/utils/auth';
import { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

interface CredentialsType {
  username?: string;
  email: string;
  password: string;
}

export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const userInfo = credentials as unknown as CredentialsType;
        // 회원가입
        if (userInfo.username) {
          return await mySignIn('signup', userInfo);
        }
        // 로그인
        return await mySignIn('login', userInfo);
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  }
} satisfies NextAuthConfig;
