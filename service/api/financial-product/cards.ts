import { SpendingHabitsCard, SpotlightCard } from '@/types/card';
import { requestFetch } from '../fetchOptions';
import ComparisonCard from '@/app/financial-product/comparison/_components/ComparisonCard';

export const getSpotlightCards = (type: string | null): Promise<SpotlightCard[]> => {
  return requestFetch(`/api/cards/spotlight?type=${type}`);
};

export const getSpendingHabitsCards = (): Promise<SpendingHabitsCard[]> => {
  return requestFetch('/api/cards/spending-habits');
};

export const getComparisonCards = (): Promise<ComparisonCard[]> => {
  return requestFetch('/api/cards/comparison');
};
