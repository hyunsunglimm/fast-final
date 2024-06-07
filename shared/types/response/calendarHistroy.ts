export type CalendarHistroyResponse = {
  totalSpent: number;
  totalEarned: number;
  historyList: HistoryListType[];
};

export type HistoryListType = {
  usedAt: string;
  cost: number;
  place: string;
  spendingCategoryId: SpendingCategoryIdType;
  payType: string;
  regret: boolean;
};

export type SpendingCategoryIdType = {
  categoryId: number;
  name: null | string;
  url: null | string;
};
