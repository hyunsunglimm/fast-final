import { authApi } from '@/service/constants';
import { requestFetch } from '../fetchOptions';

type Tdata = {
  userId: string;
  message: string;
};

export const checkEmailDuplicate = (id: string): Promise<Tdata> => {
  const body = { id };
  return requestFetch(authApi.SIGN_UP, { method: 'post', body: JSON.stringify(body) });
};
