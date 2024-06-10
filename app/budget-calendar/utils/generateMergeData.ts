import { DateInfo, DailyDataItemType, ShareDataType } from '@/shared/types/budgetCalendarType';
import { returnDate } from '@/shared/utils/dateUtils';
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
        const { day: infoDay } = returnDate(dateInfo.date);
        const dailyInfo =
          dailyData &&
          dailyData.find((data) => {
            const { day: dailyInfoDay } = returnDate(data.date);
            return dailyInfoDay === infoDay;
          });
        const shareInfo =
          shareData &&
          shareData.daily.find((data) => {
            const { day: shareInfoDay } = returnDate(data.date);
            return shareInfoDay === infoDay;
          });
        if (dailyInfo) {
          return {
            ...dateInfo,
            income: dailyInfo.earnedCost,
            expense: dailyInfo.usedCost,
            imgSrc:
              dailyInfo.weatherImageNo && `/icons/weather/weather-${dailyInfo.weatherImageNo}.svg`
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
