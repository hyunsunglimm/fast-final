export type BenefitCategories =
  | 'shopping'
  | 'cafe'
  | 'convenience_store'
  | 'public_transport'
  | 'mart'
  | 'culture'
  | 'department_store'
  | 'communication_cost'
  | 'oiling'
  | 'travel'
  | 'online'
  | 'subscribe';

export type CardCompany =
  | 'KB국민카드'
  | 'BC카드'
  | 'IBK기업은행'
  | '신한카드'
  | 'NH농협카드'
  | '현대카드'
  | '우리카드'
  | '삼성카드'
  | '하나카드'
  | '롯데카드';

export interface Benefit {
  category: BenefitCategories;
  benefitDetails: string[];
}

export type CardResponseType = {
  id: string;
  company: CardCompany;
  annual_fee: number;
  benefits: Benefit[];
  discount_limit: number;
  prev_month_performance: number;
  description: string;
  image_horizontal: string;
  image_vertical: string;
  name: string;
  type: string;
  allBenefits: string[];
  benefitCategories: string[];
};
