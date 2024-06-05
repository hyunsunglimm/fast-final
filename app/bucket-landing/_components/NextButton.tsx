import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';
import Link from 'next/link';

type NextButtonProps = {
  href: string;
  backgroundColor?: string;
  children: React.ReactNode;
};

const NextButton = ({ href, backgroundColor = '#4B5158', children }: NextButtonProps) => {
  return (
    <Link
      href={href}
      style={{ backgroundColor }}
      className='flex h-[6rem] w-full items-center justify-between rounded-sm px-24 text-white'
    >
      <Text sizes='18' weight='700'>
        {children}
      </Text>
      <Icon src='/icons/system-icon/arrow/arrow-right-white.svg' alt='다음 아이콘' />
    </Link>
  );
};

export default NextButton;
