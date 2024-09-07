import React from 'react';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
const TopContents = () => {
  return (
    <>
      <Text className='mb-20 block'>
        내가 보고 싶은 내용을 6개의 메뉴로 선택할 수 있어요 <br />
        아이콘을 길게 눌러서 순서를 변경할 수 있어요.
      </Text>
      <Card className='mb-[1.9rem] flex h-[17rem] items-center justify-center bg-[#E1E6EC]'>
        <Text sizes='18' className='text-gray-400'>
          오늘 소비 날씨
        </Text>
      </Card>
    </>
  );
};

export default TopContents;
