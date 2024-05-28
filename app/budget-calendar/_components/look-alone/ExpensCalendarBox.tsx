import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import Title from '../common/Title';

const ExpensCalendarBox = () => {
  return (
    <div className='mt-24 h-[30rem]'>
      <Title title='소비 캘린더' justifyContent='start'>
        <Icon src='/icons/system-icon/info.svg' alt='정보' size='16' />
      </Title>
    </div>
  );
};

export default ExpensCalendarBox;
