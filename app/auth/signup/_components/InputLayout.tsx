import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Text from '@/components/ui/Text';
import { UseFormRegister } from 'react-hook-form';
import { RegisterInputValue } from './SignupForm';
type ButtonInfo = { title: string; onClick: () => void };

type FormLayoutProps = {
  register: UseFormRegister<RegisterInputValue>;
  fieldKey: keyof RegisterInputValue;
  title: string;
  placeholder: string;
  inputType?: string;
  buttonInfo?: ButtonInfo | null;
  icon?: React.ReactNode;
};

const InputLayout = ({
  register,
  fieldKey,
  title,
  placeholder,
  inputType = 'text',
  buttonInfo = null,
  icon = null
}: FormLayoutProps) => {
  const validateByFieldKey = (fieldKey: string, value: any) => {
    switch (fieldKey) {
      case 'memberId':
        return value.length > 5;
      case 'password':
        return value.includes('@');
      default:
        return true;
    }
  };

  return (
    <section className='relative flex flex-col'>
      <label htmlFor={fieldKey} className='mb-[1.4rem]'>
        <Text sizes='16' variant='h3' weight='600' className='ml-[0.7rem]'>
          {title}
        </Text>
      </label>
      <div className='relative'>
        <Input
          {...register(fieldKey, {
            required: true,
            validate: (val) => validateByFieldKey(fieldKey, val)
          })}
          className='w-full rounded-[1.5rem] text-16 placeholder:text-12'
          type={inputType}
          id={fieldKey}
          placeholder={placeholder}
        />
        {buttonInfo && (
          <Button
            size='xs'
            styled='fill'
            className='absolute right-[1.3rem] top-1/2 translate-y-[-50%]'
            onClick={buttonInfo.onClick}
            type='button'
          >
            {buttonInfo.title}
          </Button>
        )}
        {icon}
      </div>
    </section>
  );
};

export default InputLayout;
