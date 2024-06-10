import { Saving } from '@/shared/types/saving';

export const getSavings = async (): Promise<Saving[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/savings`);
  return await res.json();
};
