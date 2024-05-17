import Button from '@/components/ui/Button';
type StepThreeFormProps = {
  nextStep: () => void;
};
const SignupNav = ({ nextStep }: StepThreeFormProps) => {
  return (
    <div className='flex justify-between gap-[1.5rem]'>
      <Button styled='outline' type='button' size='lg' className='basis-1/4'>
        이전
      </Button>
      <Button size='lg' styled='outline' className='basis-3/4' onClick={nextStep}>
        다음
      </Button>
    </div>
  );
};

export default SignupNav;
