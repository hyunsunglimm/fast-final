import { DefaultHeader } from '@/components/header';
import CustomNavigation from './_components/CustomNavigation';
import FinancialProducts from './_components/FinancialProducts';
import SpotlightCards from './_components/SpotlightCards';
import FinancialProductBanner from './_components/FinancialProductBanner';

const FinancialProductPage = () => {
  return (
    <>
      <DefaultHeader title='금융상품' />
      <section className='px-20 pb-[13.2rem]'>
        <FinancialProductBanner />
        <CustomNavigation />
        <FinancialProducts />
        {/* <SpotlightCards /> */}
      </section>
    </>
  );
};
export default FinancialProductPage;
