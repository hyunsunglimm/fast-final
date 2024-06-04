import { CalendarProps, DateInfo } from '@/service/types/budgetCalendarType';

const dailyData = [
  { date: '2024-06-16', income: 0, expense: 2000, weatherId: 3, reaction: false },
  { date: '2024-06-17', income: 23000, expense: 0, weatherId: 3, reaction: false },
  { date: '2024-06-18', income: 50000, expense: 20000, weatherId: 4, reaction: false },
  { date: '2024-06-20', income: 2600000, expense: 70000, weatherId: 1, reaction: false }
  // 추가적인 날짜 데이터 추가
];

const weeklyData = [
  { month: 6, week: 3, income: 0, expense: 1310003 },
  { month: 6, week: 2, income: 1230002, expense: 0 },
  { month: 6, week: 1, income: 1130001, expense: 12000 },
  { month: 5, week: 5, income: 0, expense: 1520000 },
  { month: 5, week: 4, income: 1720000, expense: 0 }
];

export const getCurrentMonthDates = ({ year, month }: CalendarProps) => {
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const dates = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    dates.push({ date: null });
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    const dailyDataItem = dailyData.find((item) => item.date === dateStr);
    dates.push({
      date: i,
      imgSrc: dailyDataItem
        ? `/icons/weather/weather-${dailyDataItem.weatherId}.svg`
        : '/icons/weather/weather-none.svg',
      income: dailyDataItem ? dailyDataItem.income : null,
      expense: dailyDataItem ? dailyDataItem.expense : null,
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
  let weekIndex = 1;
  const today = new Date();

  for (let i = 0; i < dates.length; i += 7) {
    const weekDates = dates.slice(i, i + 7);
    const isCurrentWeek = weekDates.some((date) => date.today);
    const isCurrentMonth = year === today.getFullYear() && month === today.getMonth() + 1;
    const weeklyDataItem = weeklyData.find(
      (item) => item.month === month && item.week === weekIndex
    );
    weeks.push({ weekDates, weeklyDataItem, isCurrentWeek: isCurrentWeek && isCurrentMonth });
    weekIndex++;
  }
  return weeks;
};
