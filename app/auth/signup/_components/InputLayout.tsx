import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Text from '@/components/ui/Text';

type ButtonInfo = { title: string; onClick: () => void };

type FormLayoutProps = {
  fieldKey: string;
  title: string;
  placeholder: string;
  inputType?: string;
  buttonInfo?: ButtonInfo | null;
  icon?: React.ReactNode;
};

const InputLayout = ({
  fieldKey,
  title,
  placeholder,
  inputType = 'text',
  buttonInfo = null,
  icon = null
}: FormLayoutProps) => {
  return (
    <section className='relative flex flex-col'>
      <label htmlFor={fieldKey} className='mb-[1.4rem]'>
        <Text sizes='20' className='ml-[0.7rem]'>
          {title}
        </Text>
      </label>
      <div className='relative'>
        <Input
          className='w-full rounded-[1.5rem] text-18 placeholder:text-12'
          type={inputType}
          id={fieldKey}
          placeholder={placeholder}
        />
        {buttonInfo && (
          <Button
            size='sm'
            styled='fill'
            rounded='lg'
            className='absolute right-[1.3rem] top-[1.2rem]'
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
