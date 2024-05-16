import NextIcon from '../icons/NextIcon';
import PrevIcon from '../icons/PrevIcon';
import Text from './Text';

type TextButtonProps = {
  direction?: 'left' | 'right';
  isActive?: boolean;
  children: React.ReactNode;
};

const TextButton = ({ direction = 'left', isActive = true, children }: TextButtonProps) => {
  return (
    <button className={`flex w-max items-center gap-[0.2rem] ${!isActive && 'text-gray-400'}`}>
      {direction === 'left' && <PrevIcon />}
      <Text sizes='14' className='shrink-0'>
        {children}
      </Text>
      {direction === 'right' && <NextIcon />}
    </button>
  );
};

export default TextButton;
