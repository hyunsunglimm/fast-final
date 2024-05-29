import React from 'react';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';
const CreateBucketListResult = () => {
  return (
    <section className='mt-[5.2rem] flex w-full flex-col items-center justify-center px-20'>
      <Text variant='h1' sizes='24' weight='700' className='text-center'>
        나만의 버킷리스트를 <br /> 만들었어요!
      </Text>
      <Image
        src='/images/create-bucket/flow-5.svg'
        width={172}
        height={201}
        alt='버킷 완성 포코 이미지'
        className='h-[20.1rem] w-[17.205rem]'
      />
      <FlexBox flexDirection='col' className='mb-[7.5rem] mt-40 w-full px-16'>
        <FlexBox alignItems='center' justifyContent='between' className='w-full py-8'>
          <Text variant='h5'>버킷리스트</Text>
          <Text variant='h6' className=' inline-block rounded-full bg-white px-16 py-8'>
            친구랑 유럽 여행가기
          </Text>
        </FlexBox>
        <FlexBox alignItems='center' justifyContent='between' className='w-full py-8'>
          <Text variant='h5'>저축주기</Text>
          <Text variant='h6' className=' inline-block rounded-full bg-white px-16 py-8'>
            친구랑 유럽 여행가기
          </Text>
        </FlexBox>
        <FlexBox alignItems='center' justifyContent='between' className='w-full py-8'>
          <Text variant='h5'>상품연결</Text>
          <Text variant='h6' className=' inline-block rounded-full bg-white px-16 py-8'>
            친구랑 유럽 여행가기
          </Text>
        </FlexBox>
        <FlexBox alignItems='center' justifyContent='between' className='w-full py-8'>
          <Text variant='h5'>목표금액</Text>
          <Text variant='h6' className=' inline-block rounded-full bg-white px-16 py-8'>
            친구랑 유럽 여행가기
          </Text>
        </FlexBox>
      </FlexBox>
      <Button styled='fill_black' size='md'>
        확인
      </Button>
    </section>
  );
};
export default CreateBucketListResult;
