import Icon from '@/components/Icon';

type ClearInputValueIconProps = {
  rightMargin?: boolean;
  show: boolean;
  onClick: () => void;
  className?: string;
};

const ClearInputValueIcon = ({
  rightMargin = false,
  show,
  onClick,
  className
}: ClearInputValueIconProps) => {
  const right = rightMargin ? 'right-12' : 'right-0';

  return (
    <>
      {show ? (
        <Icon
          onClick={onClick}
          src='/icons/signup/delete.svg'
          alt='삭제 아이콘'
          size='20'
          className={`${right} absolute bottom-0  top-0 my-auto cursor-pointer ${className}`}
        />
      ) : null}
    </>
  );
};
export default ClearInputValueIcon;
