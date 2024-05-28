import Title from '../common/Title';
import Icon from '@/components/Icon';

const ExpensCalendarBox = () => {
  return (
    <section className='mt-24 h-[30rem]'>
      <Title title='소비 캘린더' justifyContent='start'>
        <Icon src='/icons/system-icon/info.svg' alt='정보' size='16' />
      </Title>
    </section>
  );
};

export default ExpensCalendarBox;
