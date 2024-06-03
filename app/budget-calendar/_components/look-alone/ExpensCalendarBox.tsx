import Title from '../common/Title';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Calendar from '../shared/Calendar';

const ExpensCalendarBox = () => {
  return (
    <section className='mb-40 mt-24'>
      <Title title='소비 캘린더' justifyContent='start' className='mb-24'>
        <Icon src='/icons/system-icon/info.svg' alt='정보' size='16' />
      </Title>
      <FlexBox justifyContent='between' alignItems='center' className='mb-24'>
        <div>6월</div>
        <Button asChild size='xs' styled='outline'>
          <Link
            href='/budget-calendar/consumption?daily=월별&viewType=금액'
            aria-label='가계부 소비분석 페이지로 이동'
          >
            소비 분석
          </Link>
        </Button>
      </FlexBox>
      <Calendar />
    </section>
  );
};

export default ExpensCalendarBox;
