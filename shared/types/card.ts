export type SpotlightCard = {
  title: string;
  annualBenefits: number;
  annualFee: string;
  image: string;
  isEvent: boolean;
};

export type SpendingHabitsCard = {
  title: string;
  cardName: string;
  image: string;
  benefits: {
    title: string;
    iconPath: string;
    detail: string;
  }[];
};

export type CardsToCompare = {
  id: string;
  title: string;
  description: string;
  fileName: string;
  benefits: string[];
};

export type ComparedCards = {
  id: number;
  annualBenefit: number;
  name: string;
  monthlyBenefit: number;
  discountLimit: string;
  annualFee: string;
  prevMonthPerformance: string;
  benefits: string[];
  diffByStandardA: string;
  diffByStandardB: string;
};
