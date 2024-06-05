import { CalendarProps, DateInfo } from '@/shared/types/budgetCalendarType';

export const getCurrentMonthDates = ({ year, month }: CalendarProps) => {
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const dates = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    dates.push({ date: null });
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    dates.push({
      date: String(i),
      today:
        year === new Date().getFullYear() &&
        month === new Date().getMonth() + 1 &&
        i === new Date().getDate()
    });
  }
  return dates;
};

export const getWeeklyData = ({ year, month }: CalendarProps, dates: DateInfo[]) => {
  const weeks = [];
  const today = new Date();

  for (let i = 0; i < dates.length; i += 7) {
    const weekDates = dates.slice(i, i + 7);
    const isCurrentWeek = weekDates.some((date) => date.today);
    const isCurrentMonth = year === today.getFullYear() && month === today.getMonth() + 1;
    weeks.push({ weekDates, isCurrentWeek: isCurrentWeek && isCurrentMonth });
  }
  return weeks;
};
