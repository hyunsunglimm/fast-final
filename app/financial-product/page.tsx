import { DefaultHeader } from '@/components/header';
import CustomNavigationSection from './_components/CustomNavigationSection';
import FinancialProductBanner from './_components/FinancialProductBanner';
import SpotlightCardSection from './_components/SpotlightCardSection';
import FinancialProductSection from './_components/FinancialProductSection';
import { auth } from '@/auth';

const FinancialProductPage = async () => {
  const session = await auth();
  return (
    <>
      {/* 로그인 확인 테스트 */}
      <DefaultHeader title='상품탐색' defaultColor='#f2f4f6' />
      {session && (
        <p className='bg-blue-200 p-2 text-xl text-active'>{JSON.stringify(session.user)}</p>
      )}
      <main className='bg-gray-50 px-20 pb-[13.2rem]'>
        <FinancialProductBanner />
        <CustomNavigationSection />
        <FinancialProductSection />
        <SpotlightCardSection />
      </main>
    </>
  );
};
export default FinancialProductPage;
