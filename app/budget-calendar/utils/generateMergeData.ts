import { DateInfo, DailyDataItemType, ShareDataType } from '@/shared/types/budgetCalendarType';

export const generateMergeData = (
  weeks: {
    weekDates: DateInfo[];
    isCurrentWeek: boolean;
  }[],
  dailyData: DailyDataItemType[] | undefined,
  shareData: ShareDataType | undefined
) => {
  return weeks.map((week) => {
    const weekDates = week.weekDates.map((dateInfo) => {
      if (dateInfo.date) {
        const dateString = new Date(dateInfo.date).toISOString().split('T')[0];
        const dailyInfo = dailyData && dailyData.find((data) => data.date === dateString);
        const shareInfo = shareData && shareData.daily.find((data) => data.date === dateString);
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
