'use server';
import * as z from 'zod';
import { loginSchema } from '@/app/auth/schema/loginSchema';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

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
    return { success: 'Login successful!' };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: '아이디를 확인해 주세요.' };

        default:
          return { error: 'Something went wrong!' };
      }
    }

    throw error;
  }
};
