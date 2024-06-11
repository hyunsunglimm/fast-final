// 소비 내역 리스트
export type CalendarHistroyResponse = {
  totalSpent: number;
  totalEarned: number;
  historyList: HistoryListItemType;
};

export type HistoryListItemType = {
  totalPages: number;
  totalElementCount: number;
  currentPage: number;
  currentElementCount: number;
  perPageNumber: number;
  firstPage: boolean;
  lastPage: boolean;
  hasNextPage: boolean;
  hasPrevious: boolean;
  elements: Element[];
};

export type Element = {
  id: number;
  usedAt: string;
  cost: number;
  place: string;
  historyCategoryId: HistoryCategoryId;
  payType: string;
  isRegret: boolean;
};

export type HistoryCategoryId = {
  imageUrlTypeNo: number;
  name: string;
  type: string;
};

// 소비 상세 내역
export interface SpendingDetailResponse {
  usedAt: string;
  cost: number;
  place: string;
  historyCategoryId: HistoryCategoryId;
  payType: string;
  isRegret: boolean;
  memo: string;
}

export type PreviousRegretType = {
  pages: CalendarHistroyResponse[];
  pageParams: number[];
};
