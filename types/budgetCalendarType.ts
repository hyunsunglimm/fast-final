// 소비내역 리스트 아이템
export type ExpenseItemProps = {
  icon: string;
  iconDescription: string;
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
