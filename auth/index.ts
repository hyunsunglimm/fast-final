import NextAuth from 'next-auth';
import authConfig from './authConfig';

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    signIn: async () => true,
    jwt: async ({ token, user, trigger, session }) => {
      if (user) {
        token.accessToken = user.accessToken;
      }
      if (trigger === 'update' && session) {
        token = { ...token, ...session.user };
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    }
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24
  },
  ...authConfig
});
