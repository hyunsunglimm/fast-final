// 가계부 배너
export type BudgetBannerProps = {
  icon?: boolean;
  text: string;
  showArrow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

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
  amount: number | undefined;
};

// 공유멤버
export type SharedMembersProps = {
  viewMode: string;
  selectedProfile: string;
  setSelectedProfile: (name: string) => void;
};

export type DateInfo = {
  date: Date | null;
  imgSrc?: string;
  income?: number | null;
  expense?: number | null;
  today?: boolean;
  reaction?: boolean;
};

export type DailyDataItemType = {
  date: string;
  income: number;
  expense: number;
  weatherId: number;
  reaction: boolean;
};

export type WeeklyDataItem = {
  month: number;
  week: number;
  income: number;
  expense: number;
};

export type ShareDataType = {
  daily: ShareDataItem[];
};

export type ShareDataItem = {
  date: string;
  weatherId: number;
  reactions: {
    stickerOrEmoticonID: string;
    memberIds: number[];
  }[];
};

// 날짜 dropdown
export type YearMonthDropdownProps = {
  selectedYear: number;
  selectedMonth: number;
  onSelect: (year: number, month: number) => void;
};

export type GenerateWeeks = {
  weekDates: DateInfo[];
  isCurrentWeek: boolean;
}[];
