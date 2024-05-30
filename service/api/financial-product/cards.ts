import { SpotlightCard } from '@/types/card';
import { requestFetch } from '../fetchOptions';

export const getSpotlightCards = (type: string | null): Promise<SpotlightCard[]> => {
  return requestFetch(`/api/cards/spotlight?type=${type}`);
};
