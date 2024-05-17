import { CardContent } from '@/components/ui/card';
import SignupNav from '../SignupNav';
import NameInput from '../NameInput';
import EmailInput from '../EmailInput';
type StepTwoFormProps = {
  nextStep: () => void;
};
export const StepTwoForm = ({ nextStep }: StepTwoFormProps) => {
  return (
    <CardContent flexDirection='col'>
      <div className='flex w-full flex-col gap-[3.7rem]'>
        <NameInput />
        <EmailInput />
        <SignupNav nextStep={nextStep} />
      </div>
    </CardContent>
  );
};
