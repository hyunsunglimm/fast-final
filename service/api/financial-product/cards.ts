import { requestFetch } from '../fetchOptions';
import { client } from '@/sanity/lib/client';
import { BenefitCategories, CardCompany, CardResponseType } from '@/shared/types/response/card';
import {
  CARD_BENEFIT_CATEGORIES,
  CARD_COMPANIES
} from '@/shared/utils/financial-product/staticData';

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
  "allBenefits": benefits[].benefitDetails[],
  "benefitCategories": benefits[].category
}`;

export const getComparedCards = (): Promise<CardResponseType[]> => {
  return requestFetch('/api/cards/comparison/result');
};

export const getSpotlightCards = async (type: 'credit' | 'check') => {
  const optionQuery =
    type === 'credit'
      ? '&& (discount_limit >= 25000 || count(benefit) >= 3 || count(benefits[].benefitDetails[]) >= 10)'
      : '&& (discount_limit == 0 || count(benefit) >= 3 || count(benefits[].benefitDetails[]) >= 10)';

  return await client.fetch(`
  *[_type == "card" && type == "${type}" ${optionQuery}] | order(count(benefits[].benefitDetails[]) desc)${CardResponseFilde}
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
): Promise<CardResponseType[]> => {
  const isValidCompany =
    company && company.every((c) => CARD_COMPANIES.map((comp) => comp.title).includes(c));

  const isValidCategory =
    category &&
    category.every((c) => CARD_BENEFIT_CATEGORIES.map((cate) => cate.title_en).includes(c));

  const companyQuery = isValidCompany ? `&& company in ${JSON.stringify(company)}` : '';

  // 추후에 쿼리문 작성, 현재는 시간 상 js코드로 필터링
  // const categoryQuery = isValidCategory
  //   ? `&& benefits[].category in ${JSON.stringify(category)}`
  //   : '';

  const query = `
      *[_type == "card" && type == "${type}" ${companyQuery}]${CardResponseFilde}
    `;

  const cards = await client.fetch(query);
  let result;

  if (isValidCategory) {
    result = cards.filter((card: CardResponseType) =>
      card.benefits.some((benefit) => category.includes(benefit.category))
    );
  } else {
    result = cards;
  }

  return result;
};

export const getSelectedCardsById = async (cardIds: string[]) => {
  return await client.fetch(`
    *[_type == "card" && _id in ${JSON.stringify(cardIds)}]${CardResponseFilde}
  `);
};
