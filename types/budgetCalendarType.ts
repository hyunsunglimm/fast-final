export type ExpenseItemProps = {
  icon: string;
  iconDescription: string;
  amount: string;
  payment: string;
  method: string;
  regret?: boolean;
};

export type ExpenseSummaryProps = {
  type: string;
  amount: string;
};
