import * as z from 'zod';
import { requestFetch } from '../fetchOptions';
import { LoginResponse, CheckEmailDuplicateResponse } from '@/shared/types/response/auth';
import { loginSchema } from '@/app/(DefaultLayout)/auth/schema/loginSchema';
import { signupSchema } from '@/app/(DefaultLayout)/auth/schema/signupSchema';
const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL || '';

export const checkEmailDuplicate = (id: string): Promise<CheckEmailDuplicateResponse> => {
  const params = {
    type: 'EMAIL',
    value: id
  };
  const queryString = new URLSearchParams(params).toString();
  return requestFetch(`/member/validate?${queryString}`, { method: 'get' }, BASE_URL);
};

export const login = async (value: z.infer<typeof loginSchema>): Promise<LoginResponse> => {
  const body = { ...value };
  return requestFetch(
    '/login',
    {
      method: 'post',
      body: JSON.stringify(body)
    },
    BASE_URL
  );
};

export const signup = async (formValues: z.infer<typeof signupSchema>) => {
  // 프로필 랜덤 선택
  const profiles = ['profile_1', 'profile_2', 'profile_3'];
  const randomIndex = Math.floor(Math.random() * profiles.length);
  const profileImageUrl = `/images/default-profile/${profiles[randomIndex]}.webp`;

  const requestBody = {
    email: formValues.email,
    password: formValues.password,
    name: formValues.name,
    phoneNumber: formValues.phoneNumber,
    address: formValues.address,
    gender: formValues.gender.toUpperCase(),
    profileImageUrl
  };

  try {
    await requestFetch(
      '/member/sign-up',
      { method: 'post', body: JSON.stringify(requestBody) },
      process.env.NEXT_PUBLIC_DEV_URL
    );
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: '회원가입에 실패했습니다.' };
    }
  }
};
