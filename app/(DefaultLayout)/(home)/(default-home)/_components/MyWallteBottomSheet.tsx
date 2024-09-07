'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Icon from '@/components/Icon';
import { useOpenWallet } from '../context/OpenWalletProvider';
import { useQuery } from '@tanstack/react-query';
import { getMyWalletData } from '@/service/api/home';
import MyWalletSkeleton from './MyWalletSkeleton';
const BottomSheet = dynamic(() => import('@/components/BottomSheet'), { ssr: false });

const MyWallteBottomSheet = () => {
  const { openWallet, setOpenWallet } = useOpenWallet();

  const { data: MyWalletData, isLoading } = useQuery({
    queryKey: ['myWallet'],
    queryFn: getMyWalletData,
    enabled: openWallet
  });
  const top3Data = MyWalletData?.slice(0, 3) || [];
  const othersData = MyWalletData?.slice(3) || [];
  const othersTotalAmount = othersData?.reduce((sum, item) => sum + item.amount, 0);

  return (
    <BottomSheet
      title='내 지갑'
      buttonLabel='적용하기'
      isOpen={openWallet}
      onClose={() => setOpenWallet(false)}
      isButtonShow={false}
    >
      {isLoading ? (
        <MyWalletSkeleton />
      ) : (
        <>
          <FlexBox justifyContent='between' alignItems='center'>
            <FlexBox flexDirection='col'>
              <Text>내 계좌</Text>
              <Text sizes='24' weight='800'>
                2,022,010원
              </Text>
            </FlexBox>
            <Button styled='outline' size='xs'>
              송금
            </Button>
          </FlexBox>

          <FlexBox className='mb-16 mt-24 h-[0.8rem] w-full gap-x-1 [&>*]:rounded-[0.2rem]'>
            <FlexBox className='h-full w-3/4 bg-[#FFE600]'></FlexBox>
            <FlexBox className='h-full w-1/4 bg-[#1F5CFF]'></FlexBox>
            <FlexBox className='h-full w-1/4 bg-[#776D62]'></FlexBox>
            <FlexBox className='h-full w-1/4 bg-[#CCD1D6]'></FlexBox>
          </FlexBox>

          {top3Data.map((item) => {
            return (
              <FlexBox
                key={item.bankBookName}
                alignItems='center'
                justifyContent='between'
                className='px-16 py-[1.4rem]'
              >
                <FlexBox alignItems='center' className='gap-x-14'>
                  <Icon src={item.iconSrc} alt={`${item.bank} 아이콘`} size='40' />
                  <FlexBox flexDirection='col'>
                    <Text sizes='12' className='text-gray-700'>
                      {item.bankBookName}
                    </Text>
                    <Text sizes='16' weight='700'>
                      {item.amount.toLocaleString()}원
                    </Text>
                  </FlexBox>
                </FlexBox>
                {item.lastDeposit ? (
                  <Text sizes='12' className='text-active' weight='500'>
                    + {item.lastDeposit.toLocaleString()}원
                  </Text>
                ) : null}
                {item.lastSpending ? (
                  <Text sizes='12' className='text-warning' weight='500'>
                    - {item.lastSpending.toLocaleString()}원
                  </Text>
                ) : null}
              </FlexBox>
            );
          })}
          <FlexBox alignItems='center' justifyContent='between' className='px-16 py-[1.4rem]'>
            <FlexBox alignItems='center' className='gap-x-14'>
              <div className='grid grid-cols-2'>
                {othersData.length <= 4
                  ? othersData.map((item) => {
                      return (
                        <Icon
                          key={item.bank}
                          src={item.iconSrc}
                          alt={`${item.bank} 아이콘`}
                          size='20'
                        />
                      );
                    })
                  : othersData.slice(0, 3).map((item, index) => {
                      return (
                        <React.Fragment key={item.bank}>
                          <Icon src={item.iconSrc} alt={`${item.bank} 아이콘`} size='20' />
                          {index === 2 && (
                            <FlexBox
                              className='rounded-full bg-gray-300'
                              alignItems='center'
                              justifyContent='center'
                            >
                              +1
                            </FlexBox>
                          )}
                        </React.Fragment>
                      );
                    })}
              </div>
              <FlexBox flexDirection='col'>
                <Text sizes='12' className='text-gray-700'>
                  그 외 {othersData.length}개
                </Text>
                <Text sizes='16' weight='700'>
                  {othersTotalAmount.toLocaleString()}원
                </Text>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </>
      )}
    </BottomSheet>
  );
};

export default MyWallteBottomSheet;
