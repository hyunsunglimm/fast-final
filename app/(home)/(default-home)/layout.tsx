import dynamic from 'next/dynamic';
import { DefaultHeader } from '@/components/header';
import MyWalletButton from './_components/MyWalletButton';
import OpenWalletProvider from './context/OpenWalletProvider';
import { CardSkeleton } from '@/components/ui/skeleton';
const HomeAiBannerCard = dynamic(() => import('./_components/HomeAiBannerCard'), {
  ssr: false,
  loading: () => <CardSkeleton />
});
const DynamicMyWallteBottomSheet = dynamic(() => import('./_components/MyWallteBottomSheet'), {
  ssr: false
});

const HomeLayout = ({
  children,
  widgetSection
}: {
  children: React.ReactNode;
  widgetSection: React.ReactNode;
}) => {
  return (
    <>
      <DefaultHeader title='Home' isHome={true} defaultColor='#f2f4f6' />
      <OpenWalletProvider>
        <main className='bg-gray-50 pb-[13.2rem]'>
          {children}
          {widgetSection}
          <section className='px-20'>
            <HomeAiBannerCard />
          </section>
          <DynamicMyWallteBottomSheet />
          <MyWalletButton />
        </main>
      </OpenWalletProvider>
    </>
  );
};
export default HomeLayout;
