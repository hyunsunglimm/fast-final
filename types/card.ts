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
