import dynamic from 'next/dynamic';
import { DefaultHeader } from '@/components/header';
import MyWalletButton from './_components/MyWalletButton';
import OpenWalletProvider from './context/OpenWalletProvider';
const DynamicMyWallteBottomSheet = dynamic(() => import('./_components/MyWallteBottomSheet'), {
  ssr: false
});

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DefaultHeader title='Home' isHome={true} className='bg-gray-50' />
      <main className='bg-gray-50 pb-[13.2rem]'>{children}</main>
      <OpenWalletProvider>
        <DynamicMyWallteBottomSheet />
        <MyWalletButton />
      </OpenWalletProvider>
    </>
  );
};
export default HomeLayout;
