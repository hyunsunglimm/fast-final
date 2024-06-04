// 가계부 배너
export type BudgetBannerProps = {
  icon?: boolean;
  text: string;
  showArrow?: boolean;
};

// 소비내역 리스트 아이템
export type ExpenseItemProps = {
  icon: string;
  iconDescription: string;
  used_at: string;
  amount: string;
  payment: string;
  method: string;
  regret?: boolean;
};

// 소비내역 지출 수입
export type ExpenseSummaryProps = {
  label: string;
  amount: string;
};

// 공유멤버
export type SharedMembersProps = {
  viewMode: string;
  selectedProfile: string;
  setSelectedProfile: (name: string) => void;
};
// 달력
export type CalendarProps = {
  year: number;
  month: number;
};

export type DateInfo = {
  date: number | null;
  imgSrc?: string;
  income?: number | null;
  expense?: number | null;
  today?: boolean;
};
