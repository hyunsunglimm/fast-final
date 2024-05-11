'use client';
import { StepOneForm, StepTwoForm, StepFourForm, StepFiveForm } from './step-form';
import { useFunnel } from '@/hooks/useFunnel';
const signupSteps = ['id', 'name', '3', 'address', '5'];
const SignupForm = () => {
  const { Funnel, ShowStep, setStep } = useFunnel('signup-steps', signupSteps[0]);

  return (
    <Funnel>
      {/* <ShowStep stepsElement='id'>
        <StepOneForm nextStep={() => setStep('name')} />
      </ShowStep>
      <ShowStep stepsElement='name'>
        <StepTwoForm nextStep={() => setStep('address')} />
      </ShowStep> */}
      <ShowStep stepsElement={signupSteps[3]}>
        <StepFourForm nextStep={() => setStep(signupSteps[4])} />
      </ShowStep>
      <ShowStep stepsElement={signupSteps[4]}>
        <StepFiveForm />
      </ShowStep>
    </Funnel>
  );
};
export default SignupForm;

// {(step === '1' || step === undefined) && <StepOneForm />}
// {step === '2' && <StepTwoForm />}
/* {step === '3' && <StepFourForm />} */
// {step === '4' && <StepFourForm />}
// {step === '5' && <StepFiveForm />}
