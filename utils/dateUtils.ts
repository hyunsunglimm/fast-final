import { ExpenseItemProps } from '@/types/budgetCalendarType';

// 날짜 형식 변환 (몇일 몇요일)
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const weekDayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const weekDay = weekDayNames[date.getDay()];
  return `${day}일 ${weekDay}`;
};

// 소비내역 날짜 별로 데이터 정리
export const groupByDate = (expenses: ExpenseItemProps[]) => {
  const grouped: { [date: string]: ExpenseItemProps[] } = {};

  expenses.forEach((expense) => {
    const date = new Date(expense.used_at).toLocaleDateString();
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(expense);
  });

  return grouped;
};
