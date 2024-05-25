import { SignupInputsValues } from '../../schema/signupSchema';
import Icon from '@/components/Icon';
import { useFormContext } from 'react-hook-form';

type Address = 'address';
type AddressKeys = 'roadName' | 'detail';
type AddressPath = `${Address}.${AddressKeys}`;

type ClearInputValueIconProps = {
  rightMargin?: boolean;
  show: boolean;
  formName: Partial<keyof Omit<SignupInputsValues, 'address'>> | AddressPath;
};

const ClearInputValueIcon = ({ rightMargin = false, show, formName }: ClearInputValueIconProps) => {
  const { setValue } = useFormContext<SignupInputsValues>();
  const right = rightMargin ? 'right-12' : 'right-0';

  return (
    <>
      {show ? (
        <Icon
          onClick={() => setValue(formName, '')}
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
