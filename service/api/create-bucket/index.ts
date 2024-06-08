import { client } from '@/sanity/lib/client';
import { requestFetch } from '../fetchOptions';
import { StateType } from '@/app/create-bucket/types';

export const spendBookQueryFn = () => {
  return requestFetch('/api/bucket/spendbook');
};

export const savingBookQueryFn = () => {
  return requestFetch('/api/bucket/savingbook');
};

export const getRecentBuckets = () => {
  return client.fetch(`
    *[_type == "bucket"] | order(_createdAt desc)[0]{
      ...,
    }
  `);
};

export const createBucket = async (state: StateType) => {
  await fetch('http://localhost:3000/api/bucket', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(state)
  });
};
