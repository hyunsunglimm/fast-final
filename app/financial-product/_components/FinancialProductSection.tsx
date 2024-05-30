import Text from '@/components/ui/Text';
import FinancialProductCardByCategory from './FinancialProductCardByCategory';
import { FINANCIAL_PRODUCT_CATEGORIES } from '@/utils/financial-product/staticData';

const FinancialProductSection = () => {
  return (
    <section className='mb-[4rem]'>
      <Text sizes='20' variant='h1' weight='700'>
        금융상품
      </Text>
      <ul className='mt-8 flex flex-col gap-[1.2rem]'>
        {FINANCIAL_PRODUCT_CATEGORIES.map((productInfo) => {
          return (
            <li key={productInfo.title}>
              <FinancialProductCardByCategory productInfo={productInfo} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FinancialProductSection;
