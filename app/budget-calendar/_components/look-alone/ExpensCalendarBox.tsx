import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';

const ExpensCalendarBox = () => {
  return (
    <div className='mt-24 h-[30rem]'>
      <FlexBox alignItems='center'>
        <h2 className=' mr-8 text-18 font-600'>소비 캘린더</h2>
        <Icon src='/icons/system-icon/info.svg' alt='정보' size='16' />
      </FlexBox>
    </div>
  );
};

export default ExpensCalendarBox;
