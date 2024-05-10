// 금융상품

import Text from '@/components/ui/Text';
import RecommendationCard from './_components/RecommendationCard';

const recommendationArray = [
  {
    title: '테마별 추천',
    subTitle: '뚜렷한 목표가 없으신가요?',
    description: '상황별로 딱 맞는 상품을 알려드릴게요',
    linkTitle: '시즌별 추천 바로가기'
  },
  {
    title: '상품비교',
    subTitle: '꼭 맞는 상품 여기있어요!',
    description: '복잡한 금융상품 알아서 찾아드릴게요',
    linkTitle: '맞춤추천 바로가기'
  },
  {
    title: 'AI맞춤 추천',
    subTitle: '꼭 맞는 상품 여기있어요!',
    description: '복잡한 금융상품 알아서 찾아드릴게요',
    linkTitle: '맞춤추천 바로가기'
  }
];

const FinancialProductPage = () => {
  return (
    <div>
      <Text sizes='title20' variant='h1'>
        맞춤탐색
      </Text>
      <div className='flex flex-col gap-8'>
        {recommendationArray.map((recommendationInfo) => {
          return (
            <RecommendationCard
              key={recommendationInfo.title}
              recommendationInfo={recommendationInfo}
            />
          );
        })}
      </div>
    </div>
  );
};
export default FinancialProductPage;
