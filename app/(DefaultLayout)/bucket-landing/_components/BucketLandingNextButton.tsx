import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';

type NextButtonProps = {
  backgroundColor?: string;
  onClick: () => void;
  children: React.ReactNode;
};

const BucketLandingNextButton = ({
  backgroundColor = '#4B5158',
  onClick,
  children
}: NextButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor }}
      className='flex h-[6rem] w-full items-center justify-between rounded-sm px-24 text-white'
    >
      <Text sizes='18' weight='700'>
        {children}
      </Text>
      <Icon src='/icons/system-icon/arrow/arrow-right-white.svg' alt='다음 아이콘' />
    </button>
  );
};

export default BucketLandingNextButton;
