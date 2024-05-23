import { RequestInit } from 'next/dist/server/web/spec-extension/request';

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
  url: string,
  config?: RequestInit,
  token?: string
): Promise<T> => {
  const options = createOptions(token);

  try {
    const res = await fetch(url, { ...config, ...options });
    if (res.ok) {
      return (await res.json()) as T;
    }
    const error: Error = await res.json();
    throw new Error(error.message);
    //
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
