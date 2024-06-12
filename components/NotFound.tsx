'use client';

import Icon from '@/components/Icon';
import { useRouter } from 'next/navigation';
import React from 'react';
import Button from './ui/Button';
import Image from 'next/image';
import Text from './ui/Text';

const NotFound = () => {
  const router = useRouter();

  return (
    <section className='flex min-h-dvh flex-col justify-between bg-white px-20 pb-32'>
      <header className='flex h-[5.6rem] items-center'>
        <Icon
          onClick={() => router.back()}
          aria-hidden
          size='24'
          alt='뒤로가기'
          src='/icons/system-icon/arrow/arrow-prev.svg'
          className='cursor-pointer'
        />
      </header>
      <main className=''>
        <Image
          src='/images/not-found-porko.webp'
          alt='not found porko'
          width={400}
          height={183}
          className='mx-auto mb-24 w-[18.3rem]'
        />
        <Text variant='h1' sizes='20' weight='700' className='mb-8 text-center'>
          잘못된 접근이에요!
        </Text>
        <Text variant='h2' sizes='14' className='text-center text-gray-500'>
          요청하신 페이지를 찾을 수 없습니다.
        </Text>
        <Text variant='h2' sizes='14' className='text-center text-gray-500'>
          서비스 이용에 불편을 드려 죄송합니다.
        </Text>
      </main>
      <footer className='flex gap-6'>
        <Button styled='outline' onClick={() => router.back()}>
          이전 화면으로 가기
        </Button>
        <Button onClick={() => router.push('/')}>홈으로 가기</Button>
      </footer>
    </section>
  );
};

export default NotFound;
