'use server';
import * as z from 'zod';
import { signIn, auth, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { loginSchema } from '@/app/(DefaultLayout)/auth/schema/loginSchema';

/**
 *
 * @returns 서버 세션 호출
 */
export const currentUserSession = async () => {
  const session = await auth();
  return session;
};

export const signInWithCredentials = async (data: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }
  const { email, password } = validatedFields.data;
  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: '/'
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.cause?.err instanceof Error) {
        return { error: error.cause.err.message }; // return "custom error"
      }
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: '아이디 혹은 패스워드를 확인해 주세요.' };

        default:
          return { error: 'Something went wrong!' };
      }
    }

    throw error;
  }
};

export const logout = async () => {
  await signOut();
};
