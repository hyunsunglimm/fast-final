'use client';
import { StepOneForm, StepTwoForm, StepThreeForm, StepFourForm, StepFiveForm } from './step-form';
import { useFunnel } from '@/hooks/useFunnel';
const signupSteps = ['1', '2', '3', '4', '5'];
import { useForm, FormProvider, FieldValues } from 'react-hook-form';

export type RegisterInputValue = {
  memberId: string;
  password: string;
  reconfirmPw: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: {
    roadName: string;
    detail: string;
  };
  gender: string;
  code: string;
};

const SignupForm = () => {
  const { FunnelCompnent, ShowStepComponent, setStep } = useFunnel('signup-steps', signupSteps[0]);
  const methods = useForm<RegisterInputValue>();
  const handleRegisterSubmit = (data: FieldValues) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleRegisterSubmit)}>
        <FunnelCompnent>
          <ShowStepComponent targetStep={signupSteps[0]}>
            <StepOneForm nextStep={() => setStep(signupSteps[1])} />
          </ShowStepComponent>
          <ShowStepComponent targetStep={signupSteps[1]}>
            <StepTwoForm nextStep={() => setStep(signupSteps[2])} />
          </ShowStepComponent>
          <ShowStepComponent targetStep={signupSteps[2]}>
            <StepThreeForm nextStep={() => setStep(signupSteps[3])} />
          </ShowStepComponent>
          <ShowStepComponent targetStep={signupSteps[3]}>
            <StepFourForm nextStep={() => setStep(signupSteps[4])} />
          </ShowStepComponent>
          <ShowStepComponent targetStep={signupSteps[4]}>
            <StepFiveForm />
          </ShowStepComponent>
        </FunnelCompnent>
      </form>
    </FormProvider>
  );
};
export default SignupForm;
