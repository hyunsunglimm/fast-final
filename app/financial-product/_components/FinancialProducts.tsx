import Text from '@/components/ui/Text';
import ProductCard from './ProductCard';

const productArray = [
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

const FinancialProducts = () => {
  return (
    <section className='mb-[4rem]'>
      <Text sizes='20' variant='h1' weight='700'>
        금융상품
      </Text>
      <ul className='mt-8 flex flex-col gap-[1.2rem]'>
        {productArray.map((productInfo) => {
          return (
            <li key={productInfo.title}>
              <ProductCard productInfo={productInfo} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FinancialProducts;
