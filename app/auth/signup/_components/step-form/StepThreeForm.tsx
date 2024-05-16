import { CardContent } from '@/components/ui/card';
import SignupNav from '../SignupNav';
import PhoneInput from '../PhoneInput';
import CodeInput from '../CodeInput';

export const StepThreeForm = () => {
  return (
    <CardContent flexDirection='col'>
      <div className='flex w-full flex-col gap-[3.7rem]'>
        <PhoneInput />
        <CodeInput />
        <SignupNav />
      </div>
    </CardContent>
  );
};
