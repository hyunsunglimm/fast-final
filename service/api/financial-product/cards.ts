const CardResponseFilde = `{
  "id": _id,
  "company": company,
  "annual_fee": annual_fee,
  "benefits": benefits[]{
    "category": category,
    "benefitDetails": benefitDetails
  },
  "discount_limit": discount_limit,
  "prev_month_performance": prev_month_performance,
  "description": description,
  "card_image": card_image.asset->url,
  "name": name,
  "type": type,
}`;

import { CardsToCompare, ComparedCards } from '@/shared/types/card';
import { requestFetch } from '../fetchOptions';
import { client } from '@/sanity/lib/client';

// export const getSpendingHabitsCards = (): Promise<SpendingHabitsCard[]> => {
//   return requestFetch('/api/cards/spending-habits');
// };

export const getCardsToCompare = (): Promise<CardsToCompare[]> => {
  return requestFetch('/api/cards/comparison');
};

export const getComparedCards = (): Promise<ComparedCards[]> => {
  return requestFetch('/api/cards/comparison/result');
};

export const getSpotlightCards = async (type: 'credit' | 'check') => {
  return await client.fetch(`
  *[_type == "card" && discount_limit > 25000 && type == "${type}"]${CardResponseFilde}
`);
};

export const getSpendingHabitsCards = async () => {
  const allCards = await client.fetch(`
  *[_type == "card"]${CardResponseFilde}
`);
  const shuffled = allCards.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 5);

  return selected;
};
