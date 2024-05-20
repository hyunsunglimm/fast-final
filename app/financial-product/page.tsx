import CustomNavigation from './_components/CustomNavigation';
import FinancialProducts from './_components/FinancialProducts';
import SpotlightCards from './_components/SpotlightCards';

const FinancialProductPage = () => {
  return (
    <section className='px-20'>
      <CustomNavigation />
      <FinancialProducts />
      <SpotlightCards />
    </section>
  );
};
export default FinancialProductPage;
