import React from 'react';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { getCurrentMonthDates, getWeeklyData } from '../../utils/calendarUtils';
import { CalendarProps } from '@/shared/types/budgetCalendarType';
import { mergeData } from '../../utils/mergeData';
import { returnDate } from '@/shared/utils/dateUtils';

const Calendar = ({ year, month, dailyData, weeklyData, shareData, onClick }: CalendarProps) => {
  const dates = getCurrentMonthDates({ year, month });
  const weeks = getWeeklyData({ year, month }, dates);
  const data = mergeData(weeks, dailyData, shareData);
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const { day } = returnDate();

  return (
    <div className='text-center text-12'>
      <div className='mb-12 grid grid-cols-7'>
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {data.map((week, index) => {
        const weeklyDataItem = weeklyData?.find(
          (item) => item.month === month && item.week === index + 1
        );

        return (
          <React.Fragment key={index}>
            {/* 주차 데이터 */}
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
            {/* 달력 */}
            <div className='mb-20 grid grid-cols-7'>
              {week.weekDates.map((item, idx) => {
                const handleDateClick =
                  item.date && day >= item.date?.getDate() ? onClick : () => {};

                return (
                  <div role={onClick ? 'button' : 'none'} key={idx} onClick={handleDateClick}>
                    <div className='py-4'>
                      <Text
                        variant='p'
                        className={`mb-4 flex justify-center text-14 text-gray-600 ${item.today ? 'font-700 text-black' : ''}`}
                      >
                        {item.date && item.date.getDate()}
                        {shareData && item.imgSrc && (
                          // 반응체크 보여주는 부분 api 확인 후 수정 필요
                          <span className='ml-2 h-[0.4rem] w-[0.4rem] animate-ping rounded-full bg-primary'></span>
                        )}
                      </Text>
                      {item.date && (
                        <Icon
                          src={item.imgSrc ? item.imgSrc : '/icons/weather/weather-none.svg'}
                          alt={item.imgSrc ? '날씨 이미지' : '날씨 없음'}
                          size='44'
                          className='m-auto block rounded-none'
                        />
                      )}
                    </div>
                    <>
                      {item.expense ? (
                        <Text variant='p' sizes='10' className='text-gray-700'>
                          -{item.expense}
                        </Text>
                      ) : null}
                      {item.income ? (
                        <Text variant='p' sizes='10' className='text-primary'>
                          +{item.income}
                        </Text>
                      ) : null}
                    </>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Calendar;
