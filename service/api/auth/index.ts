import * as z from 'zod';
import { requestFetch } from '../fetchOptions';
import { loginSchema } from '@/app/auth/schema/loginSchema';
import { LoginResponse, CheckEmailDuplicateResponse } from '@/shared/types/response/auth';
import { signupSchema } from '@/app/auth/schema/signupSchema';
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
  const requestBody = {
    email: formValues.email,
    password: formValues.password,
    name: formValues.name,
    phoneNumber: formValues.phoneNumber,
    address: formValues.address,
    gender: formValues.gender.toUpperCase()
  };

  try {
    await requestFetch(
      '/member/sign-up',
      { method: 'post', body: JSON.stringify(requestBody) },
      process.env.NEXT_PUBLIC_DEV_URL
    );
    return { success: '회원가입에 성공했습니다 !' };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: '회원가입에 실패했습니다.' };
    }
  }
};
