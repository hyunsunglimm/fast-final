'use client';

import Button from '@/components/ui/Button';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import { useOpenWallet } from '../context/OpenWalletProvider';
import Text from '@/components/ui/Text';
const MyWalletButton = () => {
  const { setOpenWallet } = useOpenWallet();

  return (
    <FlexBox justifyContent='end' className='fixed bottom-40 w-full px-20 xs:w-[520px]'>
      <Button
        onClick={() => setOpenWallet(true)}
        size='xs'
        className='fixed h-[4.2rem] gap-x-8 self-end rounded-full bg-black px-16 py-8 '
      >
        <Icon
          src='/icons/home/wallet.svg'
          alt='지갑 아이콘'
          className='rounded-none'
          size='16'
          aria-hidden
        />
        <Text sizes='14' weight='700'>
          내 지갑
        </Text>
      </Button>
    </FlexBox>
  );
};
export default MyWalletButton;
