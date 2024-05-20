import { CardContent } from '@/components/ui/card';
import SignupNav from '../SignupNav';
import PhoneInput from '../PhoneInput';
import CodeInput from '../CodeInput';

type StepThreeFormProps = {
  nextStep: () => void;
};

export const StepThreeForm = ({ nextStep }: StepThreeFormProps) => {
  return (
    <CardContent flexDirection='col'>
      <div className='flex w-full flex-col gap-[3.7rem]'>
        <PhoneInput />
        <CodeInput />
        <SignupNav nextStep={nextStep} />
      </div>
    </CardContent>
  );
};
