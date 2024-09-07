import { client } from '@/sanity/lib/client';
import { requestFetch } from '../fetchOptions';
import { StateType } from '@/app/(DefaultLayout)/create-bucket/types';

export const spendBookQueryFn = () => {
  return requestFetch('/api/bucket/spendbook');
};

export const savingBookQueryFn = () => {
  return requestFetch('/api/bucket/savingbook');
};

export const getRecentBuckets = (userEmail: string) => {
  return client.fetch(`
    *[_type == "bucket" && author == "${userEmail}"][0]
  `);
};

export const createBucket = async (state: StateType) => {
  await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/bucket`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(state)
  });
};
