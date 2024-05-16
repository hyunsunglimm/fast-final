import { CardContent } from '@/components/ui/card';
import SignupNav from '../SignupNav';
import NameInput from '../NameInput';
import EmailInput from '../EmailInput';

export const StepTwoForm = () => {
  return (
    <CardContent flexDirection='col'>
      <div className='flex w-full flex-col gap-[3.7rem]'>
        <NameInput />
        <EmailInput />
        <SignupNav />
      </div>
    </CardContent>
  );
};
