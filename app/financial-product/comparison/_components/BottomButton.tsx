import Icon from '@/components/Icon';
import Spinner from '@/components/Spinner';
import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

type BottomButtonProps = {
  path: string;
  isPopup?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  isGradationWhite?: boolean;
  onClick?: () => void;
  styled?: 'fill_black' | 'fill_blue';
  children: React.ReactNode;
};

const BottomButton = ({
  path,
  isPopup = false,
  disabled = false,
  isLoading = false,
  isGradationWhite = false,
  onClick,
  styled = 'fill_black',
  children
}: BottomButtonProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className='fixed bottom-0 z-10 w-full xs:w-[520px]'>
      {isPopup && (
        <div className='absolute bottom-[10rem] w-full px-20'>
          <FlexBox className='gap-8 rounded-sm bg-[#4B5158] px-20 py-16'>
            <Icon src='/icons/financial-product/warning.svg' alt='경고 아이콘' size='20' />
            <Text weight='500' className='text-white'>
              선택하신 카드들은 공통카테고리가 없어요
            </Text>
          </FlexBox>
        </div>
      )}
      <Image
        src={
          isGradationWhite
            ? '/images/bucket-landing/bottom-gradation-white.webp'
            : '/images/financial-product/bottom-gradation.webp'
        }
        alt='바텀 그라데이션'
        width={500}
        height={125}
        className='w-full'
      />
      <div className='absolute bottom-1/2 w-full translate-y-[50%] px-20'>
        <Button
          disabled={disabled || isLoading}
          size='lg'
          styled={styled}
          onClick={() => {
            if (onClick) {
              onClick();
            } else {
              router.push(`${path}?${searchParams.toString()}`);
            }
          }}
        >
          {isLoading ? <Spinner /> : children}
        </Button>
      </div>
    </div>
  );
};

export default BottomButton;
