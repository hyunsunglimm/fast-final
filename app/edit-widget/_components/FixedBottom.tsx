import React from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';

const FixedBottom = () => {
  return (
    <FlexBox className='shadow-top-shadow fixed bottom-0 w-full border-t border-gray-50 bg-white px-[2rem] pb-[3.2rem] pt-[2.4rem] xs:w-[520px]'>
      <Button size='md'>완료</Button>
    </FlexBox>
  );
};
export default FixedBottom;
