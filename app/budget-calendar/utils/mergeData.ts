import { DateInfo, DailyDataItemType, ShareData } from '@/shared/types/budgetCalendarType';

export const mergeData = (
  weeks: {
    weekDates: DateInfo[];
    isCurrentWeek: boolean;
  }[],
  dailyData: DailyDataItemType[] | undefined,
  shareData: ShareData | undefined
) => {
  return weeks.map((week) => {
    const weekDates = week.weekDates.map((dateInfo) => {
      if (dateInfo.date) {
        const dateString = new Date(dateInfo.date).getDate();
        const dailyInfo =
          dailyData && dailyData.find((data) => new Date(data.date).getDate() === dateString);
        const shareInfo =
          shareData && shareData.daily.find((data) => new Date(data.date).getDate() === dateString);
        if (dailyInfo) {
          return {
            ...dateInfo,
            income: dailyInfo.income,
            expense: dailyInfo.expense,
            imgSrc: dailyInfo.weatherId && `/icons/weather/weather-${dailyInfo.weatherId}.svg`
          };
        }
        if (shareInfo) {
          return {
            ...dateInfo,
            imgSrc: shareInfo.weatherId && `/icons/weather/weather-${shareInfo.weatherId}.svg`
          };
        }
      }
      return dateInfo;
    });
    return { ...week, weekDates };
  });
};
