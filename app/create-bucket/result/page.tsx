import React from 'react';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const CreateBucketListResult = async () => {
  const session = await auth();

  if (!session) {
    return redirect('/');
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/bucket?user-email=${session?.user?.email}`
  );
  const createdBucket = await res.json();

  if (!createdBucket) {
    return redirect('/');
  }

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
        className='mt-32 h-[20.1rem] w-[17.205rem]'
      />
      <FlexBox flexDirection='col' className='mb-[7.5rem] mt-40 w-full px-16'>
        <FlexBox alignItems='center' justifyContent='between' className='w-full py-8'>
          <Text variant='h5'>버킷리스트</Text>
          <Text
            variant='h6'
            weight='500'
            className=' inline-block rounded-full bg-white px-16 py-8'
          >
            {createdBucket.bucket_name}
          </Text>
        </FlexBox>
        <FlexBox alignItems='center' justifyContent='between' className='w-full py-8'>
          <Text variant='h5'>저축주기</Text>
          <Text
            variant='h6'
            weight='500'
            className=' inline-block rounded-full bg-white px-16 py-8'
          >
            매주 {createdBucket.day_of_week} {createdBucket.savings_amount}원씩
          </Text>
        </FlexBox>
        <FlexBox alignItems='center' justifyContent='between' className='w-full py-8'>
          <Text variant='h5'>상품연결</Text>
          <Text
            variant='h6'
            weight='500'
            className=' inline-block rounded-full bg-white px-16 py-8'
          >
            {decodeURIComponent(createdBucket.my_saving_product || '')
              .split('|')
              .filter((item) => item.trim() !== '').length + '개' || '0개'}
          </Text>
        </FlexBox>
        <FlexBox alignItems='center' justifyContent='between' className='w-full py-8'>
          <Text variant='h5'>목표금액</Text>
          <Text
            variant='h6'
            weight='500'
            className=' inline-block rounded-full bg-white px-16 py-8'
          >
            {createdBucket.target_amount} 원
          </Text>
        </FlexBox>
      </FlexBox>
      <Button asChild styled='fill_black' size='md'>
        <Link href='/'>확인</Link>
      </Button>
    </section>
  );
};
export default CreateBucketListResult;
