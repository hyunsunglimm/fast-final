import { MouseEvent } from 'react';
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
  dailyData?: DailyDataItemType[];
  weeklyData?: WeeklyDataItem[];
  shareData?: ShareData;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
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

export interface ShareData {
  count: number;
  daily: ShareDataItem[];
}

export interface ShareDataItem {
  date: string;
  weatherId: number;
  reactions: {
    memberId: number;
    stickerOrEmoticonID: string;
    count: number;
  }[];
}

// 날짜 dropdown
export type YearMonthDropdownProps = {
  selectedYear: number;
  selectedMonth: number;
  onSelect: (year: number, month: number) => void;
};

// 가계부 목표 설정
export type FormValues = {
  amount: string;
};

export type TargetManagementInputProps = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onEnterKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export type TargetModifyBottomSheetProps = {
  modifyPopup: boolean;
  setModifyPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TargetBudgetBottomSheetProps = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setBudgetSet: React.Dispatch<React.SetStateAction<boolean>>;
};
