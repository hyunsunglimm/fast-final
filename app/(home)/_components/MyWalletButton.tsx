'use client';

import Button from '@/components/ui/Button';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import { useOpenWallet } from '../context/OpenWalletProvider';

const MyWalletButton = () => {
  const { setOpenWallet } = useOpenWallet();

  return (
    <>
      {/* 내 지갑 버튼 */}
      <FlexBox justifyContent='end' className='fixed bottom-40 w-full px-20 xs:w-[520px]'>
        <Button
          onClick={() => setOpenWallet(true)}
          size='xs'
          className='h-[4.2rem] gap-x-8 self-end rounded-full bg-black px-16 py-8 text-14 font-700'
        >
          <Icon src='/icons/home/wallet.svg' alt='지갑 아이콘' className='rounded-none' size='16' />
          내 지갑
        </Button>
      </FlexBox>
    </>
  );
};
export default MyWalletButton;
