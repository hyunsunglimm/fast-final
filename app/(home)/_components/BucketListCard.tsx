import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import Image from 'next/image';

const BucketListCard = () => {
  return (
    <Card rounded='xl' className='aspect-square bg-sky-400 text-white'>
      <CardHeader>
        <div className='flex w-fit items-center rounded-xl bg-indigo-900 px-[8px] py-[6px]'>
          <Text sizes='caption10'>버킷 리스트</Text>
        </div>
      </CardHeader>
      <CardContent flexDirection='col' alignItems='start' justifyContent='between' className='pr-0'>
        <Text sizes='title20'>유럽 여행가기</Text>
        <CardContent justifyContent='between' className='w-full px-0'>
          <div>버킷 리스트</div>
          <div className='relative h-[230px] w-[202px] overflow-hidden '>
            <Image
              src='/images/home-bucket-rabbit.png'
              fill
              alt='버킷리스트'
              title='버킷리스트'
              sizes='auto'
              priority
              className='object-cover'
            />
          </div>
        </CardContent>
      </CardContent>
      <CardFooter>350,000 / 2,000,000원</CardFooter>
    </Card>
  );
};

export default BucketListCard;
