import React from 'react';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';

const weeklyData = [
  { month: 6, week: 3, income: 0, expense: 1310003 },
  { month: 6, week: 2, income: 1230002, expense: 0 },
  { month: 6, week: 1, income: 1130001, expense: 12000 },
  { month: 5, week: 5, income: 0, expense: 1520000 },
  { month: 5, week: 4, income: 1720000, expense: 0 }
];

const dailyData = [
  { date: '2024-06-16', income: 0, expense: 2000, weatherId: 3, reaction: false },
  { date: '2024-06-17', income: 23000, expense: 0, weatherId: 3, reaction: false },
  { date: '2024-06-18', income: 50000, expense: 20000, weatherId: 4, reaction: false },
  { date: '2024-06-20', income: 2600000, expense: 70000, weatherId: 1, reaction: false }
  // 추가적인 날짜 데이터 추가
];

const Calendar = () => {
  const today = new Date();
  const month = today.getMonth() + 1; // 현재 월 (1월은 0)
  const year = today.getFullYear(); // 현재 연도

  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();

  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
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
      today: i === today.getDate()
    });
  }

  const weeks = [];
  let weekIndex = 1; // 주차 인덱스 초기화
  for (let i = 0; i < dates.length; i += 7) {
    const weekDates = dates.slice(i, i + 7);
    const isCurrentWeek = weekDates.some((date) => date.date === today.getDate());
    const weeklyDataItem = weeklyData.find(
      (item) => item.month === month && item.week === weekIndex
    );
    weeks.push({ weekDates, weeklyDataItem, isCurrentWeek });
    weekIndex++; // 다음 주차 인덱스로 이동
  }

  return (
    <div className='text-center text-12'>
      <div className='mb-12 grid grid-cols-7'>
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      {weeks.map((week, index) => {
        return (
          <div key={index}>
            <FlexBox
              className={`mb-10 rounded-xxs px-12 py-6 ${week.isCurrentWeek ? 'bg-select' : 'bg-gray-10'}`}
              justifyContent='between'
            >
              {week.weeklyDataItem ? (
                <>
                  <div>{week.weeklyDataItem.week}주차</div>
                  <div>
                    {week.weeklyDataItem.expense > 0 && (
                      <Text>-{week.weeklyDataItem.expense}원</Text>
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
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
