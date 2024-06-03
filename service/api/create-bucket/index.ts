import { requestFetch } from '../fetchOptions';

export const spendBookQueryFn = () => {
  return requestFetch('/api/bucket/spendbook');
};

export const savingBookQueryFn = () => {
  return requestFetch('/api/bucket/savingbook');
};
