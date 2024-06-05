import { DateInfo, DailyDataItemType } from '@/shared/types/budgetCalendarType';

export const mergeData = (
  weeks: {
    weekDates: DateInfo[];
    isCurrentWeek: boolean;
  }[],
  dailyData: DailyDataItemType[] | undefined
) => {
  return weeks.map((week) => {
    const weekDates = week.weekDates.map((dateInfo) => {
      if (dateInfo.date) {
        const dateString = new Date(dateInfo.date).getDate();
        const dailyInfo =
          dailyData && dailyData.find((data) => new Date(data.date).getDate() === dateString);
        if (dailyInfo) {
          return {
            ...dateInfo,
            income: dailyInfo.income,
            expense: dailyInfo.expense,
            imgSrc: dailyInfo.weatherId
              ? `/icons/weather/weather-${dailyInfo.weatherId}.svg`
              : dateInfo.imgSrc
          };
        }
      }
      return dateInfo;
    });
    return { ...week, weekDates };
  });
};
