import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Text from '@/components/ui/Text';
import { RegisterOptions, SubmitHandler, useFormContext } from 'react-hook-form';
import { StepOneFormFields, StepOneFormFieldsKey } from './step-form';

type FieldKey = StepOneFormFieldsKey;

type FormLayoutProps = {
  fieldKey: FieldKey;
  title: string;
  placeholder: string;
  rule: RegisterOptions<StepOneFormFields, FieldKey>;
  inputType?: string;
  isButton?: boolean;
  icon?: React.ReactNode;
  onClick?: SubmitHandler<StepOneFormFields>;
};

const InputLayout = ({
  fieldKey,
  title,
  placeholder,
  rule,
  inputType = 'text',
  isButton = false,
  icon = null,
  onClick = () => {}
}: FormLayoutProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useFormContext<StepOneFormFields>();

  return (
    <section className='relative mb-[3.7rem] flex flex-col'>
      <label htmlFor={fieldKey} className='mb-[1.5rem]'>
        <Text sizes='20' className='ml-[0.7rem]'>
          {title}
        </Text>
      </label>
      <div className='relative mb-[0.5rem]'>
        <Input
          className='text-18 placeholder:text-12 w-full rounded-[1.5rem]'
          {...register(fieldKey, rule)}
          type={inputType}
          id={fieldKey}
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
        {icon}
      </div>
      {errors[fieldKey] && (
        <Text sizes='12' className='absolute bottom-[-1.8rem] left-[0.9rem] text-red-500'>
          {errors[fieldKey]?.message}
        </Text>
      )}
    </section>
  );
};

export default InputLayout;
