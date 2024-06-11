'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import useOnloadImage from '@/shared/hooks/useOnloadImage';
import { useUserSession } from '@/shared/hooks/useUserSession';

const DefaultBucketListCard = () => {
  const { onload, onLoadImage } = useOnloadImage();
  const userData = useUserSession();

  return (
    <Card className='flex min-h-[33.9rem] w-full flex-col justify-between p-24'>
      <CardHeader>
        <Text sizes='16' weight='600' className='text-primary'>
          반가워요, {userData?.name ? userData?.name + '님' : ''}
        </Text>
        <Text sizes='20' weight='700'>
          버킷리스트를 만들고 <br /> 목돈을 모으세요!
        </Text>
      </CardHeader>
      <CardContent className='relative flex-1'>
        <Image
          src='/images/home/bucket-default.webp'
          width={174}
          height={175}
          alt='버킷리스트'
          title='버킷리스트 이미지'
          priority
          onLoad={onLoadImage}
          quality={onload ? '100' : '10'}
          className='pointer-events-none absolute bottom-8 right-0 h-[17.5rem] w-[17.4rem]'
        />
      </CardContent>
      <CardFooter>
        <Button asChild size='md' className='text-16 font-600'>
          <Link href='/bucket-landing' aria-label='버킷 리스트 랜딩페이지로 이동'>
            시작하기
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default DefaultBucketListCard;
