import Icon from '@/components/Icon';

type ClearInputValueIconProps = {
  rightMargin?: boolean;
  show: boolean;
  onClick: () => void;
};

const ClearInputValueIcon = ({ rightMargin = false, show, onClick }: ClearInputValueIconProps) => {
  const right = rightMargin ? 'right-12' : 'right-0';

  return (
    <>
      {show ? (
        <Icon
          onClick={onClick}
          src='/icons/signup/delete.svg'
          alt='삭제 아이콘'
          size='20'
          className={`${right} absolute bottom-0  top-0 my-auto cursor-pointer`}
        />
      ) : null}
    </>
  );
};
export default ClearInputValueIcon;
