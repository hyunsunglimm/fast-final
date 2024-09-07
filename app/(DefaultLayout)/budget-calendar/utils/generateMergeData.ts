import { DateInfo, DailyDataItemType } from '@/shared/types/budgetCalendarType';
import { returnDate } from '@/shared/utils/dateUtils';
export const generateMergeData = (
  weeks: {
    weekDates: DateInfo[];
    isCurrentWeek: boolean;
  }[],
  dailyData: DailyDataItemType[] | undefined,
  shareData?: DailyDataItemType[] | undefined
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
          shareData.find((data) => {
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
            imgSrc:
              shareInfo.weatherImageNo && `/icons/weather/weather-${shareInfo.weatherImageNo}.svg`,
            reactions: shareInfo.reactions
          };
        }
      }
      return dateInfo;
    });
    return { ...week, weekDates };
  });
};
