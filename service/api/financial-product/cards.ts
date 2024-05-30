import { SpendingHabitsCard, SpotlightCard } from '@/types/card';
import { requestFetch } from '../fetchOptions';

export const getSpotlightCards = (type: string | null): Promise<SpotlightCard[]> => {
  return requestFetch(`/api/cards/spotlight?type=${type}`);
};

export const getSpendingHabitsCards = (): Promise<SpendingHabitsCard[]> => {
  return requestFetch('/api/cards/spending-habits');
};
