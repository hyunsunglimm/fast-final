import { Saving } from '@/types/saving';
import { requestFetch } from '../fetchOptions';

export const getSavings = (): Promise<Saving[]> => {
  return requestFetch('/api/savings');
};
