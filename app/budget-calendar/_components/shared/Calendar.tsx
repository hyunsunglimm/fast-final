import React from 'react';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { getCurrentMonthDates, getWeeklyData } from '@/shared/utils/calendarUtils';
import { CalendarProps } from '@/shared/types/budgetCalendarType';

const Calendar = ({ year, month, isAlone = true }: CalendarProps) => {
  const dates = getCurrentMonthDates({ year, month });
  const weeks = getWeeklyData({ year, month }, dates);
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const marginTopClass = isAlone ? '' : 'mt-24';
  return (
    <div className={`text-center text-12 ${marginTopClass}`}>
      <div className='mb-12 grid grid-cols-7'>
        {weekdays.map((day) => {
          return (
            <Text sizes='12' className='text-gray-600' key={day}>
              {day}
            </Text>
          );
        })}
      </div>
      {weeks.map((week, index) => {
        return (
          <React.Fragment key={index}>
            {isAlone && (
              <FlexBox
                className={`mb-10 rounded-xxs px-12 py-6 ${week.isCurrentWeek ? 'bg-select' : 'bg-gray-10'}`}
                justifyContent='between'
              >
                {week.weeklyDataItem ? (
                  <>
                    <div>{week.weeklyDataItem.week}주차</div>
                    <div>
                      {week.weeklyDataItem.expense > 0 && (
                        <Text sizes='12'>-{week.weeklyDataItem.expense}원</Text>
                      )}
                      {week.weeklyDataItem.income > 0 && (
                        <Text className='ml-8 text-primary'>+{week.weeklyDataItem.income}원</Text>
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
                return (
                  <div key={idx}>
                    <div className='py-4'>
                      <Text
                        variant='p'
                        className={`mb-4 text-14 text-gray-600 ${item.today ? 'font-700 text-black' : ''}`}
                      >
                        {item.date}
                      </Text>
                      {item.imgSrc && (
                        <Icon
                          src={item.imgSrc}
                          alt='날씨 이미지'
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
