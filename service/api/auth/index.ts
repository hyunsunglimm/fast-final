import { authApi } from '@/service/constants';
import { requestFetch } from '../fetchOptions';
import { CredentialsSignin } from 'next-auth';

type Tdata = {
  userId: string;
  message: string;
};

export const checkEmailDuplicate = (id: string): Promise<Tdata> => {
  const body = { id };

  return requestFetch(authApi.SIGN_UP, { method: 'post', body: JSON.stringify(body) });
};

export async function mySignIn(
  type: 'signup' | 'login',
  userInfo: { username?: string; email: string; password: string }
) {
  const { username: displayName, email, password } = userInfo;
  const res = await fetch(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/${type}`,
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: 'KDT7_bcAmPe9B',
        username: 'LimHyunSung'
      },
      body: JSON.stringify({
        displayName,
        email,
        password
      })
    }
  );
  const data = await res.json();
  if (res.ok) {
    const { user, accessToken } = data;
    return {
      id: user.email,
      email: user.email,
      name: user.displayName,
      image: user.profileImg,
      accessToken
    };
  }
  throw new CredentialsSignin({
    cause: data || '문제가 발생했습니다!'
  });
}
