// 금융상품

import Text from '@/components/ui/Text';
import ProductCard from './_components/ProductCard';
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

const productArray = [
  {
    title: '#차근차근 모아봐요',
    products: [{ title: '입출금' }, { title: '예적금' }, { title: '청약' }]
  },
  {
    title: '#똑똑하게 소비해요',
    products: [{ title: '체크카드' }, { title: '신용카드' }]
  },
  {
    title: '#신중하게 빌려봐요',
    products: [{ title: '신용대출' }, { title: '비상금대출' }, { title: '전세대출' }]
  },
  {
    title: '#쑥쑥 불려봐요',
    products: [{ title: '펀드' }, { title: '주식투자' }, { title: 'ISA' }]
  }
];

const FinancialProductPage = () => {
  return (
    <div>
      <Text sizes='title20' variant='h1'>
        맞춤탐색
      </Text>
      <div className='mb-16 mt-8 flex flex-col gap-8'>
        {recommendationArray.map((recommendationInfo) => {
          return (
            <RecommendationCard
              key={recommendationInfo.title}
              recommendationInfo={recommendationInfo}
            />
          );
        })}
      </div>
      <Text sizes='title20' variant='h1'>
        금융상품
      </Text>
      <div className='mt-8 flex flex-col gap-[12px]'>
        {productArray.map((productInfo) => (
          <ProductCard key={productInfo.title} productInfo={productInfo} />
        ))}
      </div>
    </div>
  );
};
export default FinancialProductPage;
