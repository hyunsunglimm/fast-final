import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Title from '../common/Title';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Calendar from '../shared/Calendar';
import YearMonthDropdown from '../shared/YearMonthDropdown';
import WeatherInfoBottomSheet from '../shared/WeatherInfoBottomSheet';
import { getCalendar } from '@/service/api/calendar';
import { DailyDataItemType } from '@/shared/types/budgetCalendarType';

const ExpensCalendarBox = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const handleYearMonthSelect = (year: number, month: number) => {
    setSelectedYear(year);
    setSelectedMonth(month);
  };

  const { data: dailyData = [] } = useQuery<DailyDataItemType[]>({
    queryKey: ['getCalendar', selectedYear, selectedMonth],
    queryFn: () => getCalendar(selectedYear, selectedMonth)
  });

  const [openWeatherInfo, setOpenWeatherInfo] = useState(false);

  return (
    <>
      <section className='mb-40 mt-24'>
        <Title title='소비 캘린더' justifyContent='start' className='mb-24'>
          <Icon
            src='/icons/system-icon/info.svg'
            alt='정보'
            size='16'
            className='cursor-pointer'
            onClick={() => setOpenWeatherInfo(true)}
          />
        </Title>
        <FlexBox justifyContent='between' alignItems='center' className='relative mb-24'>
          <YearMonthDropdown
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            onSelect={handleYearMonthSelect}
          />
          <Button asChild size='xs' styled='outline'>
            <Link
              href='/budget-calendar/consumption?daily=월별&viewType=금액'
              aria-label='가계부 소비분석 페이지로 이동'
            >
              소비 분석
            </Link>
          </Button>
        </FlexBox>
        <Calendar year={selectedYear} month={selectedMonth} dailyData={dailyData} />
      </section>

      {/* 소비 캘린 정보 바텀 시트 */}
      <WeatherInfoBottomSheet
        openWeatherInfo={openWeatherInfo}
        setOpenWeatherInfo={setOpenWeatherInfo}
        title='소비 캘린더'
      />
    </>
  );
};

export default ExpensCalendarBox;
