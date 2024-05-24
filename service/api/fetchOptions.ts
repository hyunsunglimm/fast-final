import { RequestInit } from 'next/dist/server/web/spec-extension/request';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const createOptions = (token?: string) => {
  const headers: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return { headers };
};

export const requestFetch = async <T>(
  endPoint: string,
  config?: RequestInit,
  token?: string
): Promise<T> => {
  const options = createOptions(token);

  try {
    const res = await fetch(BASE_URL + endPoint, { ...config, ...options });

    if (res.ok) {
      return (await res.json()) as T;
    }
    const error: Error = await res.json();
    throw new Error(error.message);
    //
  } catch (error) {
    throw { message: getErrorMessage(error) };
  }
};

const getErrorMessage = (error: unknown): string => {
  let message: string = '';

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }
  return message;
};
