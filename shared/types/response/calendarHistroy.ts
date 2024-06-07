// 소비 내역 리스트
export type CalendarHistroyResponse = {
  totalSpent: number;
  totalEarned: number;
  historyList: HistoryListType[];
};

export type HistoryListType = {
  id: number;
  usedAt: string;
  cost: number;
  place: string;
  historyCategoryId: SpendingCategoryIdType;
  payType: string;
  isRegret: boolean;
};

export type SpendingCategoryIdType = {
  imageUrlTypeNo: number;
  name: string;
  type: string;
};

// 소비 상세 내역
export interface SpendingDetailResponse {
  usedAt: string;
  cost: number;
  place: string;
  historyCategoryId: SpendingCategoryIdType;
  payType: string;
  isRegret: boolean;
  memo: string;
}
