import * as z from 'zod';
import { requestFetch } from '../fetchOptions';
import { loginSchema } from '@/app/auth/schema/loginSchema';
import { LoginResponse, CheckEmailDuplicateResponse } from '@/shared/types/response/auth';
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
