'use client';
import React from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <main className='flex h-dvh w-full flex-col items-center bg-white p-20 text-center'>
      <FlexBox flexDirection='col' justifyContent='center' alignItems='center' className='flex-1'>
        <div className='relative h-[18.3rem] w-[18.3rem]'>
          <Image src='/images/not-found.png' fill alt='잘못된 접근 이미지' sizes='auto' priority />
        </div>
        <div className='mt-24'>
          <Text sizes='20' weight='700'>
            잘못된 접근이에요!
          </Text>
          <br />
          <Text className='mt-8 inline-block text-gray-500'>
            요청하신 페이지를 찾을 수 없습니다.
          </Text>
          <br />
          <Text className='text-gray-500'>서비스 이용에 불편을 드려 죄송합니다.</Text>
        </div>
      </FlexBox>
      <FlexBox className='w-full gap-x-6 self-end'>
        <Button styled='outline' onClick={() => router.back()}>
          이전 화면으로 가기
        </Button>
        <Button onClick={() => router.push('/')}>홈으로 가기</Button>
      </FlexBox>
    </main>
  );
};
export default NotFoundPage;
