import SwiperWrapper from '@/components/SwiperWrapper';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';

const BucketLandingPartTwoSecondSection = () => {
  return (
    <section className='bg-gray-50 pb-[4.8rem]'>
      <FlexBox flexDirection='col' alignItems='center' className='pt-[6.4rem]'>
        <Image
          src='/images/bucket-landing/part2-speech-bubble-2.webp'
          alt='말풍선 이미지 1'
          width={200}
          height={30}
          className='mb-24 w-[4.6rem]'
        />
        <Text sizes='28' weight='800' className='text-gray-500'>
          모으고 싶을 때
        </Text>
        <Text sizes='28' weight='800' className='mb-20'>
          간단하고 편하게!
        </Text>
        <Text weight='500'>송금절차 번거로우시죠?</Text>
        <Text weight='500' className='mb-[4.8rem]'>
          규칙을 선택하고 즉시 송금해요
        </Text>
      </FlexBox>
      <SwiperWrapper dots>
        <Image
          src='/images/bucket-landing/part2-slide-1.webp'
          alt='송금 절차 슬라이드 1'
          width={1000}
          height={434}
          className='h-[43.4rem]'
        />
        <Image
          src='/images/bucket-landing/part2-slide-2.webp'
          alt='송금 절차 슬라이드 2'
          width={1000}
          height={434}
          className='mx-auto h-[43.4rem] w-[26rem]'
        />
        <Image
          src='/images/bucket-landing/part2-slide-3.webp'
          alt='송금 절차 슬라이드 3'
          width={1000}
          height={434}
          className='h-[43.4rem]'
        />
      </SwiperWrapper>
    </section>
  );
};

export default BucketLandingPartTwoSecondSection;
