import { HistoryListType } from '../types/response/calendarHistroy';

// 날짜 형식 변환 (몇일 몇요일)
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const weekDayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const weekDay = weekDayNames[date.getDay()];
  return `${day}일 ${weekDay}`;
};

// 소비내역 날짜 별로 데이터 정리
export const groupByDate = (expenses: HistoryListType[] | undefined) => {
  const grouped: { [date: string]: HistoryListType[] } = {};
  if (expenses) {
    expenses.forEach((expense) => {
      const date = new Date(expense.usedAt).toLocaleDateString();
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(expense);
    });
  }

  return grouped;
};

/**
 * 날짜 리턴
 * @returns 년,월,일 리턴
 */
export const returnDate = (dateString?: string | number | Date) => {
  const date = dateString ? new Date(dateString) : new Date();

  if (!isNaN(date.getTime())) {
    return {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      hour: date.getHours(),
      minute: date.getMinutes()
    };
  }

  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    hour: date.getHours(),
    minute: date.getMinutes()
  };
};

/**
 *
 * @param targetAmount 목표 금액
 * @param weeklySavingAmount 매주 저축 할 금액
 * @param startDate 시작하는 날짜
 * @returns 만료 날짜
 */
export const calculateSavingPlan = (
  targetAmount: number,
  weeklySavingAmount: number,
  startDate: Date
) => {
  const weeksNeeded = Math.ceil(targetAmount / weeklySavingAmount);

  const completionDate = new Date(startDate);
  completionDate.setDate(startDate.getDate() + weeksNeeded * 7);

  return { completionDate };
};
