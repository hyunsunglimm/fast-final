// /finacial-product
export const FINANCIAL_PRODUCT_NAVIGATION = [
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

// /finacial-product
export const FINANCIAL_PRODUCT_CATEGORIES = [
  {
    title: '#차근차근 모아봐요',
    products: [
      { title: '입출금', iconPath: '/icons/financial-product/transaction.svg' },
      { title: '예적금', iconPath: '/icons/financial-product/deposit.svg' },
      { title: '청약', iconPath: '/icons/financial-product/subscription.svg' }
    ]
  },
  {
    title: '#똑똑하게 소비해요',
    products: [
      { title: '신용카드', iconPath: '/icons/financial-product/credit-card.svg' },
      { title: '체크카드', iconPath: '/icons/financial-product/check-card.svg' }
    ]
  },
  {
    title: '#신중하게 빌려봐요',
    products: [
      { title: '신용대출', iconPath: '/icons/financial-product/credit-loan.svg' },
      { title: '비상금대출', iconPath: '/icons/financial-product/emergency-loan.svg' },
      { title: '전세대출', iconPath: '/icons/financial-product/lease-loan.svg' }
    ]
  },
  {
    title: '#쑥쑥 불려봐요',
    products: [
      { title: '펀드', iconPath: '/icons/financial-product/fund.svg' },
      { title: '주식투자', iconPath: '/icons/financial-product/stock-investment.svg' },
      { title: 'ISA', iconPath: '/icons/financial-product/isa.svg' }
    ]
  }
];
