import MotionCarousel from '@/components/MotionCarousel';
import Text from '@/components/ui/Text';
import RecommendationCard from './RecommendationCard';

const recommendationArray = [
  {
    title: '상품비교',
    subTitle: '하나하나 살펴보기 힘들죠?',
    description: '원하는 혜택을 쉽게 비교해보세요',
    linkTitle: '상품비교 바로가기',
    href: 'comparison?tab1=카드&tab2=신용카드'
  },
  {
    title: '테마별 추천',
    subTitle: '뚜렷한 목표가 없으신가요?',
    description: '상황별로 딱 맞는 상품을 알려드릴게요',
    linkTitle: '테마별 추천 바로가기',
    href: 'theme-recommendations'
  },
  {
    title: 'AI맞춤 추천',
    subTitle: '꼭 맞는 상품 여기있어요!',
    description: '복잡한 금융상품 알아서 찾아드릴게요',
    linkTitle: '맞춤 추천 바로가기',
    href: 'ai-recommendations?tab=예적금'
  }
];

const CustomNavigation = () => {
  return (
    <div className='mb-[2.4rem]'>
      <Text sizes='20' variant='h1' weight='700'>
        맞춤탐색
      </Text>
      <MotionCarousel>
        {recommendationArray.map((recommendationInfo) => {
          return (
            <RecommendationCard
              key={recommendationInfo.title}
              recommendationInfo={recommendationInfo}
            />
          );
        })}
      </MotionCarousel>
    </div>
  );
};

export default CustomNavigation;
