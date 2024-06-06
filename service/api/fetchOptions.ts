import { currentUserSession } from '@/shared/actions/auth';
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
  baseUrl?: string
): Promise<T> => {
  const session = await currentUserSession();
  const accessToken = session?.accessToken || '';
  const options = createOptions(accessToken);

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
      const textResponse = await res.text();
      if (!textResponse) {
        return {} as T;
      }
      const jsonResponse = JSON.parse(textResponse);
      return jsonResponse as T;
    }

    let errorMessage = 'Something went wrong';
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorMessage;
      console.error('Error response JSON:', errorData);
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
  return 'An unknown error occurred';
};
