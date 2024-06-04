import dynamic from 'next/dynamic';
import { DefaultHeader } from '@/components/header';
import MyWalletButton from './_components/MyWalletButton';
import OpenWalletProvider from './context/OpenWalletProvider';
import { CardSkeleton } from '@/components/ui/skeleton';
import HomeBucketBannerCard from './_components/HomeBucketBannerCard';
import Text from '@/components/ui/Text';
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
        <main className='relative bg-gray-50 pb-[13.2rem]'>
          {children}
          {widgetSection}
          <section className='flex flex-col gap-16 px-20 pt-[2.6rem]'>
            <Text variant='h2' sizes='20' weight='700' className='mb-[]'>
              추천서비스
            </Text>
            <HomeBucketBannerCard />
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
