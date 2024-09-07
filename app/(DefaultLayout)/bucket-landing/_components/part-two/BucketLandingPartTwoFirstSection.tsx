import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';

const BucketLandingPartTwoFirstSection = () => {
  return (
    <section className='bg-white pb-[6.2rem]'>
      <Image
        src='/images/bucket-landing/part2-main.webp'
        alt='버킷리스트 랜딩페이지 저축생활 2편 메인 이미지'
        width={500}
        height={438}
        className='w-full'
        priority
      />
      <FlexBox flexDirection='col' alignItems='center' className='pt-[6.4rem]'>
        <Image
          src='/images/bucket-landing/part2-speech-bubble-1.webp'
          alt='말풍선 이미지 1'
          width={200}
          height={30}
          className='mb-24 w-[4.6rem]'
        />
        <Text sizes='28' weight='800' className='text-gray-500'>
          언제 저축하고 싶으세요?
        </Text>
        <Text sizes='28' weight='800' className='mb-20'>
          규칙과 금액을 정해봐요!
        </Text>
        <Text weight='500'>스스로 저축하고 싶은 규칙과</Text>
        <Text weight='500'>금액을 만들고 돈을 모아봐요</Text>

        <FlexBox className='hide-scrollbar mt-[4.4rem] gap-20 overflow-x-scroll px-20'>
          <Image
            src='/images/bucket-landing/want-to-place.webp'
            alt='가고 싶은 곳을 발견 했을 때'
            width={300}
            height={228}
            className='w-[17rem]'
          />
          <Image
            src='/images/bucket-landing/impulse-consumption.webp'
            alt='충동소비 하고 싶을 때'
            width={300}
            height={228}
            className='w-[17rem]'
          />
          <Image
            src='/images/bucket-landing/want-to-drink.webp'
            alt='술 먹고 싶을 때'
            width={300}
            height={228}
            className='w-[17rem]'
          />
        </FlexBox>
      </FlexBox>
    </section>
  );
};

export default BucketLandingPartTwoFirstSection;
