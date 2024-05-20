import CheckCardIcon from '@/components/icons/financial-product/CheckCardIcon';
import CreditLoanIcon from '@/components/icons/financial-product/CreditLoanIcon';
import DepositIcon from '@/components/icons/financial-product/DepositIcon';
import EmergencyLoanIcon from '@/components/icons/financial-product/EmergencyLoanIcon';
import FinancialTransactionIcon from '@/components/icons/financial-product/FinancialTransactionIcon';
import FundIcon from '@/components/icons/financial-product/FundIcon';
import ISAIcon from '@/components/icons/financial-product/ISAIcon';
import LeaseLoanIcon from '@/components/icons/financial-product/LeaseLoanIcon';
import StockInvestmentIcon from '@/components/icons/financial-product/StockInvestmentIcon';
import SubscriptionIcon from '@/components/icons/financial-product/SubscriptionIcon';
import Text from '@/components/ui/Text';
import ProductCard from './ProductCard';
import CreditCardIcon from '@/components/icons/financial-product/CreditCardIcon';

const productArray = [
  {
    title: '#차근차근 모아봐요',
    products: [
      { title: '입출금', icon: <FinancialTransactionIcon /> },
      { title: '예적금', icon: <DepositIcon /> },
      { title: '청약', icon: <SubscriptionIcon /> }
    ]
  },
  {
    title: '#똑똑하게 소비해요',
    products: [
      { title: '신용카드', icon: <CreditCardIcon /> },
      { title: '체크카드', icon: <CheckCardIcon /> }
    ]
  },
  {
    title: '#신중하게 빌려봐요',
    products: [
      { title: '신용대출', icon: <CreditLoanIcon /> },
      { title: '비상금대출', icon: <EmergencyLoanIcon /> },
      { title: '전세대출', icon: <LeaseLoanIcon /> }
    ]
  },
  {
    title: '#쑥쑥 불려봐요',
    products: [
      { title: '펀드', icon: <FundIcon /> },
      { title: '주식투자', icon: <StockInvestmentIcon /> },
      { title: 'ISA', icon: <ISAIcon /> }
    ]
  }
];

const FinancialProducts = () => {
  return (
    <div className='mb-[4rem]'>
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
    </div>
  );
};

export default FinancialProducts;
