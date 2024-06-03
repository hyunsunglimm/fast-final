import { requestFetch } from '../fetchOptions';

export const spendBookQueryFn = async () => {
  return requestFetch('/api/bucket/spendbook');
};

export const savingBookQueryFn = async () => {
  return requestFetch('/api/bucket/savingbook');
};
