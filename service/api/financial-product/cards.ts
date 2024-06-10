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
  "image_horizontal": image_horizontal.asset->url,
  "image_vertical": image_vertical.asset->url,
  "name": name,
  "type": type,
}`;

import { ComparedCards } from '@/shared/types/card';
import { requestFetch } from '../fetchOptions';
import { client } from '@/sanity/lib/client';
import { BenefitCategories, CardCompany } from '@/shared/types/response/card';

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
  const randomSlicedCards = allCards.sort(() => 0.5 - Math.random()).slice(0, 5);

  return randomSlicedCards;
};

export const getFilteredCards = async (
  type: 'credit' | 'check',
  company?: CardCompany[],
  category?: BenefitCategories[]
) => {
  const companyFilter =
    company && company.length > 0
      ? `&& company in [${company.map((comp) => `"${comp}"`).join(', ')}]`
      : '';

  const query = `
      *[_type == "card" && type == "${type}" ${companyFilter}]${CardResponseFilde}
    `;

  return await client.fetch(query);
};
