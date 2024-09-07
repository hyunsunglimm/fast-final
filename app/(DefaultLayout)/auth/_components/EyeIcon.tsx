import Icon from '@/components/Icon';

type EyeIconProps = {
  show: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const EyeIcon = ({ show, setState }: EyeIconProps) => {
  return (
    <>
      {show ? (
        <Icon
          src='/icons/signup/eye.svg'
          alt='눈 아이콘'
          size='20'
          className='absolute bottom-0 right-0 top-0 my-auto cursor-pointer'
          onClick={() => setState(false)}
          placeholder='empty'
        />
      ) : (
        <Icon
          src='/icons/signup/eye-hide.svg'
          alt='숨긴 눈 아이콘'
          size='20'
          className='absolute bottom-0 right-0 top-0 my-auto cursor-pointer'
          onClick={() => setState(true)}
          placeholder='empty'
        />
      )}
    </>
  );
};
export default EyeIcon;
