import dynamic from 'next/dynamic';
import { DefaultHeader } from '@/components/header';
import MyWalletButton from './_components/MyWalletButton';
import OpenWalletProvider from './context/OpenWalletProvider';
import { CardSkeleton } from '@/components/ui/skeleton';
import Text from '@/components/ui/Text';
import { currentUserSession } from '@/shared/actions/auth';

const HomeBucketBannerCard = dynamic(() => import('./_components/HomeBucketBannerCard'), {
  ssr: false,
  loading: () => <CardSkeleton />
});
const HomeAiBannerCard = dynamic(() => import('./_components/HomeAiBannerCard'), {
  ssr: false,
  loading: () => <CardSkeleton />
});
const DynamicMyWallteBottomSheet = dynamic(() => import('./_components/MyWallteBottomSheet'), {
  ssr: false
});

const HomeLayout = async ({
  children,
  widgetSection
}: {
  children: React.ReactNode;
  widgetSection: React.ReactNode;
}) => {
  const session = await currentUserSession();

  return (
    <>
      <DefaultHeader title='Home' isHome={true} defaultColor='#f2f4f6' />
      <OpenWalletProvider>
        <main className='relative bg-gray-50 pb-[13.2rem]'>
          {children}
          {session && widgetSection}
          <section className='flex flex-col gap-16 px-20 pt-[2.6rem]'>
            <Text variant='h2' sizes='20' weight='700'>
              추천서비스
            </Text>
            <HomeBucketBannerCard />
            <HomeAiBannerCard />
          </section>
          <DynamicMyWallteBottomSheet />
          {session && <MyWalletButton />}
        </main>
      </OpenWalletProvider>
    </>
  );
};
export default HomeLayout;
