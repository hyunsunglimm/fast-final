import FlexBox from '@/components/ui/FlexBox';
import Image from 'next/image';
import SpeechBubbleHeader from './_components/SpeechBubbleHeader';
import CurrentCardInfo from './_components/CurrentCardInfo';
import FirstComparison from './_components/FirstComparison';
import SecondComparison from './_components/SecondComparison';

const ResultPage = () => {
  return (
    <>
      <SpeechBubbleHeader />
      <FlexBox justifyContent='center' className='mt-[27rem]'>
        <Image
          src='/images/financial-product/result-shinhan-card.png'
          alt='신한 카드 비교 결과 이미지'
          width={400}
          height={160}
          className='w-[25.2rem]'
        />
      </FlexBox>
      <CurrentCardInfo />
      <FirstComparison />
      <SecondComparison />
    </>
  );
};

export default ResultPage;
