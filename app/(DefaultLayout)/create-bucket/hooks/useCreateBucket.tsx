import { useContext } from 'react';
import { CreateBucketContext } from '../context/createBucketContext';

export const useCreateBucket = () => {
  const context = useContext(CreateBucketContext);
  if (!context) {
    throw new Error('use provider');
  }
  return context;
};
