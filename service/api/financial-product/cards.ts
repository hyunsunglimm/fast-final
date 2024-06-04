import {
  CardsToCompare,
  ComparedCards,
  SpendingHabitsCard,
  SpotlightCard
} from '@/service/types/card';
import { requestFetch } from '../fetchOptions';

export const getSpotlightCards = (type: string | null): Promise<SpotlightCard[]> => {
  return requestFetch(`/api/cards/spotlight?type=${type}`);
};

export const getSpendingHabitsCards = (): Promise<SpendingHabitsCard[]> => {
  return requestFetch('/api/cards/spending-habits');
};

export const getCardsToCompare = (): Promise<CardsToCompare[]> => {
  return requestFetch('/api/cards/comparison');
};

export const getComparedCards = (): Promise<ComparedCards[]> => {
  return requestFetch('/api/cards/comparison/result');
};
