import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useFormContext } from 'react-hook-form';
type StepThreeFormProps = {
  nextStep: () => void;
};
const SignupNav = ({ nextStep }: StepThreeFormProps) => {
  const { trigger } = useFormContext();
  const router = useRouter();
  const handleNext = async () => {
    const res = await trigger('memberId');
    console.log(res);
    if (res) {
      nextStep();
    }
  };
  return (
    <div className='flex justify-between gap-[1.5rem]'>
      <Button
        styled='outline'
        type='button'
        size='lg'
        className='basis-1/4'
        onClick={() => router.back()}
      >
        이전
      </Button>
      <Button size='lg' styled='outline' className='basis-3/4' onClick={handleNext}>
        다음
      </Button>
    </div>
  );
};

export default SignupNav;
