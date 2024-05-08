import NextAuth from 'next-auth';
import authConfig from './authConfig';

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async signIn() {
      return true;
    },

    async session({ token, session }) {
      return session;
    },

    async jwt({ token }) {
      return token;
    }
  },
  secret: process.env.AUTH_SECRET,
  session: { strategy: 'jwt' },
  ...authConfig
});
