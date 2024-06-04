import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const HomeBucketBannerCard = () => {
  return (
    <Link href='/bucket-landing'>
      <Card className='relative flex h-[13.4rem] justify-between overflow-hidden bg-[#34794D] p-24'>
        <FlexBox flexDirection='col' justifyContent='center' className='h-full gap-y-10 text-white'>
          <Text sizes='12' weight='500'>
            저축생활
          </Text>
          <Text sizes='18' weight='700'>
            나만의 버킷리스트로 <br />
            즐겁게 돈모으기
          </Text>
        </FlexBox>
        <div className='absolute bottom-0 right-0 h-[13.4rem] w-[15rem]'>
          <Image
            src='/images/home/bucket-banner.webp'
            alt='AI 맞춤 추천 이미지'
            fill
            sizes='auto'
            loading='lazy'
            className='object-contain object-bottom'
          />
        </div>
      </Card>
    </Link>
  );
};

export default HomeBucketBannerCard;
