import React from 'react';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { getCurrentMonthDates, getWeeklyData } from '@/shared/utils/calendarUtils';
import { CalendarProps } from '@/shared/types/budgetCalendarType';

const Calendar = ({ year, month, dailyData, weeklyData, shareData }: CalendarProps) => {
  const dates = getCurrentMonthDates({ year, month });
  const weeks = getWeeklyData({ year, month }, dates);
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className='text-center text-12'>
      <div className='mb-12 grid grid-cols-7'>
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      {weeks.map((week, index) => {
        const weeklyDataItem = weeklyData?.find(
          (item) => item.month === month && item.week === index + 1
        );
        return (
          <div key={index}>
            {weeklyData && (
              <FlexBox
                className={`mb-10 rounded-xxs px-12 py-6 ${week.isCurrentWeek ? 'bg-select' : 'bg-gray-10'}`}
                justifyContent='between'
              >
                {weeklyDataItem ? (
                  <>
                    <div>{weeklyDataItem.week}주차</div>
                    <div>
                      {weeklyDataItem.expense > 0 && <Text>-{weeklyDataItem.expense}원</Text>}
                      {weeklyDataItem.income > 0 && (
                        <Text className='ml-8 text-primary'>+{weeklyDataItem.income}원</Text>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div>{index + 1}주차</div>
                    <div>
                      <Text>?원</Text>
                      <Text className='ml-8'>?원</Text>
                    </div>
                  </>
                )}
              </FlexBox>
            )}
            <div className='mb-20 grid grid-cols-7'>
              {week.weekDates.map((item, idx) => {
                const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(item.date).padStart(2, '0')}`;
                const dailyItem = dailyData?.find((data) => data.date === formattedDate);
                const shareDataItem = shareData?.daily.find((item) => item.date === formattedDate);

                return (
                  <div key={idx}>
                    <div className='py-4'>
                      <Text
                        variant='p'
                        className={`mb-4 text-14 text-gray-600 ${item.today ? 'font-700 text-black' : ''}`}
                      >
                        {item.date}
                      </Text>
                      {item.date && (
                        <Icon
                          src={`/icons/weather/weather-${dailyItem?.weatherId || shareDataItem?.weatherId || 'none'}.svg`}
                          alt={dailyItem || shareDataItem ? '날씨 이미지' : '날씨 없음'}
                          size='44'
                          className='m-auto block rounded-none'
                        />
                      )}
                    </div>
                    {dailyItem && (
                      <>
                        {dailyItem.expense ? (
                          <Text variant='p' sizes='10' className='text-gray-700'>
                            -{dailyItem.expense}
                          </Text>
                        ) : null}
                        {dailyItem.income ? (
                          <Text variant='p' sizes='10' className='text-primary'>
                            +{dailyItem.income}
                          </Text>
                        ) : null}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
