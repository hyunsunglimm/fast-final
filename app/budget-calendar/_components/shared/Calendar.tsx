import React from 'react';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { getCurrentMonthDates, getWeeklyData } from '../../utils/calendarUtils';
import { DailyDataItemType } from '@/shared/types/budgetCalendarType';

import { returnDate } from '@/shared/utils/dateUtils';
import { cn } from '@/shared/utils/twMerge';
import { generateMergeData } from '../../utils/generateMergeData';
import { formatNumber } from '@/shared/utils/formatNumber';

type CalendarProps = {
  year: number;
  month: number;
  dailyData?: DailyDataItemType[];
  shareData?: DailyDataItemType[];
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Calendar = ({ year, month, dailyData, shareData, onClick }: CalendarProps) => {
  const dates = getCurrentMonthDates(year, month);
  const weeks = getWeeklyData(year, month, dates);
  const data = generateMergeData(weeks, dailyData, shareData);
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
        const totalIncome = week.weekDates.reduce((acc, curr) => acc + (curr.income ?? 0), 0);
        const totalExpense = week.weekDates.reduce((acc, curr) => acc + (curr.expense ?? 0), 0);

        // 수입과 지출이 있는지 확인
        const hasIncomeOrExpense = week.weekDates.some(
          (item) => item.income !== undefined || item.expense !== undefined
        );

        return (
          <React.Fragment key={index}>
            {/* 주차 데이터 */}
            {dailyData && (
              <FlexBox
                className={`mb-10 rounded-xxs px-12 py-6 ${week.isCurrentWeek ? 'bg-select' : 'bg-gray-10'}`}
                justifyContent='between'
              >
                {hasIncomeOrExpense ? (
                  <>
                    <div>{index + 1}주차</div>
                    <div>
                      {totalExpense < 0 && <Text>{formatNumber(totalExpense)}원</Text>}
                      {totalIncome > 0 && (
                        <Text className='ml-8 text-primary'>+{formatNumber(totalIncome)}원</Text>
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
                  item.date && item.imgSrc && day >= item.date?.getDate() ? onClick : undefined;

                return (
                  <div
                    role={handleDateClick ? 'button' : 'none'}
                    key={idx}
                    id={item.date?.toISOString()}
                    onClick={handleDateClick}
                  >
                    <div className='py-4'>
                      <Text
                        variant='p'
                        className={cn(
                          'mb-4 flex justify-center text-14 text-gray-600',
                          item.today ? 'font-700 text-black' : ''
                        )}
                      >
                        {item.date && item.date.getDate()}
                        {shareData && item.reactions && (
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
                          {formatNumber(item.expense)}
                        </Text>
                      ) : null}
                      {item.income ? (
                        <Text variant='p' sizes='10' className='text-primary'>
                          +{formatNumber(item.income)}
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
