import Image from 'next/image';
import SpeechBubbleHeader from './_components/SpeechBubbleHeader';
import CurrentCardInfo from './_components/CurrentCardInfo';
import FirstComparison from './_components/FirstComparison';
import SecondComparison from './_components/SecondComparison';
import SwiperWrapper from '@/components/SwiperWrapper';

const ResultPage = () => {
  return (
    <>
      <SpeechBubbleHeader />
      <div className='mt-[21.4rem]'>
        <SwiperWrapper arrow>
          <Image
            src='/images/financial-product/result-shinhan-card.png'
            alt='신한 카드 비교 결과 이미지'
            width={400}
            height={160}
            className='pointer-events-none mx-auto w-[25.2rem]'
          />
          <Image
            src='/images/financial-product/result-shinhan-mrlife-card.png'
            alt='신한 카드 비교 결과 이미지'
            width={400}
            height={160}
            className='pointer-events-none mx-auto w-[25.2rem]'
          />
        </SwiperWrapper>
      </div>
      <CurrentCardInfo />
      <FirstComparison />
      <SecondComparison />
    </>
  );
};

export default ResultPage;
