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
export type Friend = {
  memberId: number;
  name: string;
  profileImageUrl: string;
};

export type FriendData = {
  friendCount: number;
  friendList: Friend[];
};

export type SharedMembersProps = {
  viewMode: string;
  selectedProfile: Friend;
  setSelectedProfile: (item: Friend) => void;
};

export type DateInfo = {
  date: Date | null;
  imgSrc?: string;
  income?: number | null;
  expense?: number | null;
  today?: boolean;
  reactions?: {
    stickerOrEmoticonID: string;
    memberIds: number[];
  }[];
};

export type DailyDataItemType = {
  date: string;
  usedCost: number;
  earnedCost: number;
  weatherImageNo: number;
  reactions?: {
    stickerOrEmoticonID: string;
    memberIds: number[];
  }[];
};

export type ShareDataType = {
  daily: ShareDataItem[];
};

export type ShareDataItem = {
  date: string;
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
  onClose: () => void;
};

export type TargetBudgetBottomSheetProps = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setBudgetSet: React.Dispatch<React.SetStateAction<boolean>>;
};
