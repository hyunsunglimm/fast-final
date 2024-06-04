'use server';

import { LoginInputsValues } from '@/app/auth/schema/loginSchema';
import { signIn, signOut } from '@/auth';
import { CredentialsSignin } from 'next-auth';
import { redirect } from 'next/navigation';

export const signInWithCredentials = async (data: LoginInputsValues) => {
  try {
    await signIn('credentials', {
      email: data.email,
      password: data.password
    });
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return { message: error.cause as unknown as string };
    }
  }
  // 로그인 성공 후 금융상품 페이지로 이동합니다.
  // 테스트 용도이므로 추후 홈페이지로 이동 예정입니다.
  redirect('/financial-product');
};

export const signOutWithForm = async (formData: FormData) => {
  return await signOut();
};
