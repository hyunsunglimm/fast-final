import { RequestInit } from 'next/dist/server/web/spec-extension/request';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

const createOptions = (token?: string): RequestInit => {
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
  config: RequestInit = {},
  baseUrl?: string,
  token?: string
): Promise<T> => {
  const options = createOptions(token);
  const URL = baseUrl ? baseUrl : BASE_URL;
  try {
    const res = await fetch(URL + endPoint, {
      ...config,
      headers: {
        ...options.headers,
        ...config.headers
      }
    });

    if (res.ok) {
      return (await res.json()) as T;
    }

    let errorMessage = 'Something went wrong';
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorMessage;
    } catch (parseError) {
      console.error('Error parsing JSON response:', parseError);
    }

    throw new Error(errorMessage);
  } catch (networkError) {
    console.error('Network or fetch error:', networkError);
    throw new Error(getErrorMessage(networkError));
  }
};

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  if (error && typeof error === 'object' && 'message' in error) {
    return String((error as { message: unknown }).message);
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'Something went wrong';
};
