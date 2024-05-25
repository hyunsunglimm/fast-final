import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';

const AiBanner = () => {
  return (
    <div className='px-20'>
      <FlexBox
        flexDirection='col'
        justifyContent='between'
        className='relative rounded-md bg-[#5A7EFF] p-24'
      >
        <Text sizes='16' weight='700' className='mb-[1rem] text-white'>
          나에게 꼭 맞는 <br /> 금융 상품 추천 받기!
        </Text>
        <div className='flex items-center text-white'>
          <Text sizes='12'>다시 받으러가기</Text>
          <Icon src='/icons/system-icon/arrow/arrow-right-white.svg' alt='next icon' size='16' />
        </div>
        <Image
          src='/images/financial-product/ai-banner-porko.png'
          alt='ai 배너 이미지'
          width={300}
          height={133}
          className='absolute bottom-0 right-[3.5rem] w-[9.5rem]'
          priority
        />
      </FlexBox>
    </div>
  );
};

export default AiBanner;
