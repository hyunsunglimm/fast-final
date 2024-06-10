// /finacial-product
export const FINANCIAL_PRODUCT_NAVIGATION = [
  {
    title: 'AI 맞춤 추천',
    subTitle: '꼭 맞는 상품 여기있어요',
    href: 'ai-recommendations?tab=예적금',
    color: '#597BFF'
  },
  {
    title: '테마별 추천',
    subTitle: '상황별로 딱 맞는 상품은 여기있어요',
    href: 'theme-recommendations',
    color: '#8D72F9'
  },
  {
    title: '상품비교',
    subTitle: '원하는 혜택을 쉽게 비교해보세요',
    href: 'comparison?tab1=카드&tab2=신용카드',
    color: '#4DC450'
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

// /financial-product/theme-recommendations
export const THEMES = [
  {
    title: '쇼핑 카드 추천',
    subTitle: '쇼핑 중독자에게 꼭 맞는',
    iconPath: '/icons/financial-product/shopping.svg',
    color: '#FF7D51',
    href: 'shopping-card'
  },
  {
    title: '편의점 카드 추천',
    subTitle: '편의점 단골 손님을 위한',
    iconPath: '/icons/financial-product/convenience-store-card-recommendation.svg',
    color: '#4CC590',
    href: 'convenience-card'
  },
  {
    title: '6개월 적금 추천',
    subTitle: '다가올 여름 여행 경비를 위한',
    iconPath: '/icons/financial-product/six-month-savings-recommendation.svg',
    color: '#65A4DA',
    href: 'six-month-savings'
  },
  {
    title: '연말 ・ 연초 적금 상품 추천',
    subTitle: '4%이상 금리를 받고싶은 당신을 위한',
    iconPath: '/icons/financial-product/savings-recommendation.svg',
    color: '#8F98FF',
    href: 'savings'
  }
];

export const CARD_BENEFIT_CATEGORIES = [
  { title_kr: '쇼핑', title_en: 'shopping', iconPath: '/icons/product/product-shopping.svg' },
  { title_kr: '카페', title_en: 'cafe', iconPath: '/icons/product/product-cafe.svg' },
  { title_kr: '편의점', title_en: 'convenience_store', iconPath: '/icons/product/product-cvs.svg' },
  {
    title_kr: '대중교통',
    title_en: 'public_transport',
    iconPath: '/icons/product/product-traffic.svg'
  },
  {
    title_kr: '마트',
    title_en: 'mart',
    iconPath: '/icons/product/product-mart.svg'
  },
  {
    title_kr: '문화',
    title_en: 'culture',
    iconPath: '/icons/product/product-culture.svg'
  },
  {
    title_kr: '백화점',
    title_en: 'department_store',
    iconPath: '/icons/product/product-stores.svg'
  },
  {
    title_kr: '통신비',
    title_en: 'communication_cost',
    iconPath: '/icons/product/product-communication.svg'
  },
  {
    title_kr: '주유',
    title_en: 'oiling',
    iconPath: '/icons/product/product-oiling.svg'
  },
  {
    title_kr: '여행',
    title_en: 'travel',
    iconPath: '/icons/product/product-travel.svg'
  },
  {
    title_kr: '온라인',
    title_en: 'online',
    iconPath: '/icons/product/product-online.svg'
  },
  {
    title_kr: '구독',
    title_en: 'subscribe',
    iconPath: '/icons/product/product-subscribe.svg'
  }
];

export const CARD_COMPANIES = [
  { title: 'KB국민카드', iconPath: '/icons/logos/bank/bank-kb.svg' },
  { title: 'BC카드', iconPath: '/icons/logos/bank/bank-bc.svg' },
  { title: 'IBK기업은행', iconPath: '/icons/logos/bank/bank-ibk.svg' },
  { title: '신한카드', iconPath: '/icons/logos/bank/bank-shinhan.svg' },
  { title: 'NH농협카드', iconPath: '/icons/logos/bank/bank-nh.svg' },
  { title: '현대카드', iconPath: '/icons/logos/bank/bank-hyundai.svg' },
  { title: '우리카드', iconPath: '/icons/logos/bank/bank-woori.svg' },
  { title: '삼성카드', iconPath: '/icons/logos/bank/bank-samsung.svg' },
  { title: '하나카드', iconPath: '/icons/logos/bank/bank-hana.svg' },
  { title: '롯데카드', iconPath: '/icons/logos/bank/bank-lotte.svg' }
];
