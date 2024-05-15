import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Text from '@/components/ui/Text';
import { RegisterOptions, SubmitHandler, useFormContext } from 'react-hook-form';
import { StepOneFormFields, StepOneFormFieldsKey } from './step-form';

type FieldKeys = StepOneFormFieldsKey;

type FormLayoutProps = {
  type: FieldKeys;
  title: string;
  placeholder: string;
  rule: RegisterOptions<StepOneFormFields, FieldKeys>;
  isButton?: boolean;
  isIcon?: boolean;
  onClick?: SubmitHandler<StepOneFormFields>;
};

const InputLayout = ({
  type,
  title,
  placeholder,
  rule,
  isButton = false,
  isIcon = false,
  onClick = () => {}
}: FormLayoutProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useFormContext<StepOneFormFields>();

  return (
    <section className='relative mb-[3.7rem] flex flex-col'>
      <label htmlFor={type} className='mb-[1.5rem]'>
        <Text sizes='20' className='ml-[0.7rem]'>
          {title}
        </Text>
      </label>
      <div className='relative mb-[0.5rem]'>
        <Input
          className='text-18 placeholder:text-12 w-full rounded-[1.5rem]'
          {...register(type, rule)}
          type={type === 'password' ? 'password' : 'text'}
          id={type}
          placeholder={placeholder}
        />
        {isButton && (
          <Button
            size='sm'
            styled='fill'
            rounded='lg'
            disabled={isSubmitting}
            className='absolute right-[1.3rem] top-[1.2rem]'
            onClick={handleSubmit(onClick)}
            type='button'
          >
            중복확인
          </Button>
        )}
      </div>
      {errors[type] && (
        <Text sizes='12' className='absolute bottom-[-1.8rem] left-[0.9rem] text-red-500'>
          {errors[type]?.message}
        </Text>
      )}
    </section>
  );
};

export default InputLayout;
