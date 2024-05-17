'use client';
import { StepOneForm, StepTwoForm, StepThreeForm, StepFourForm, StepFiveForm } from './step-form';
import { useFunnel } from '@/hooks/useFunnel';
const signupSteps = ['1', '2', '3', '4', '5'];

const SignupForm = () => {
  const { FunnelCompnent, ShowStepComponent, setStep } = useFunnel('signup-steps', signupSteps[0]);

  return (
    <>
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
    </>
  );
};
export default SignupForm;

// {(step === '1' || step === undefined) && <StepOneForm />}
// {step === '2' && <StepTwoForm />}
/* {step === '3' && <StepFourForm />} */
// {step === '4' && <StepFourForm />}
// {step === '5' && <StepFiveForm />}
