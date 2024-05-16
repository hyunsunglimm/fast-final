import Button from '@/components/ui/Button';

const SignupNav = () => {
  return (
    <div className='flex justify-between'>
      <Button styled='outline' type='button' size='signup_prev' rounded='xl'>
        이전
      </Button>
      <Button size='signup_next' styled='outline' rounded='xl'>
        다음
      </Button>
    </div>
  );
};

export default SignupNav;
