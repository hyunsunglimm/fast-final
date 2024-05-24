'use client';
import { useState, useEffect } from 'react';
import { StepOneForm, StepTwoForm, StepThreeForm, StepFourForm } from './step-form';
import { useFunnel } from '@/hooks/useFunnel';
import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import SignupHeader from './SignupHeader';
import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';

const steps = [
  {
    step: '1',
    name: '회원가입을 위해 <br/> 정보를 입력해주세요',
    fields: ['email', 'password', 'confirmPassword']
  },
  {
    step: '2',
    name: '회원가입을 위해 <br/> 정보를 입력해주세요',
    fields: ['name', 'phoneNumber']
  },
  {
    step: '3',
    name: '회원가입을 위해 <br/> 정보를 입력해주세요',
    fields: [{ address: ['roadName', 'detail'] }, 'gender']
  },
  { step: '4', name: '이용약관을 확인하고 <br/> 동의해주세요' }
];

export type RegisterInputValue = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phoneNumber: string;
  address: {
    roadName: string;
    detail: string;
  };
  gender: string;
};

const SignupForm = () => {
  // const [currentStep, setCurrentStep] = useState(1);
  const { FunnelCompnent, ShowStepComponent, setStep, currentStep } = useFunnel(
    'signup-steps',
    steps[0].step
  );
  const methods = useForm<RegisterInputValue>();
  const handleRegisterSubmit = (data: FieldValues) => console.log(data);

  const next = () => {
    const currentIndex = steps.findIndex((step) => step.step === currentStep);
    console.log('currentIndex', currentIndex);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1].step);
    }
  };

  useEffect(() => {
    console.log('currentStep', currentStep);
    // setStep(steps[currentStep].id);
  }, [currentStep]);

  return (
    <>
      <SignupHeader currentStep={currentStep} />
      <FlexBox className='space-y-2 px-20' flexDirection='col'>
        {currentStep !== '4' ? (
          <Text variant='h2' sizes='20' weight='700'>
            회원가입을 위해
            <br /> 정보를 입력해주세요
          </Text>
        ) : (
          <Text variant='h2' sizes='20' weight='700'>
            이용약관을 확인하고
            <br /> 동의해주세요
          </Text>
        )}
        <Text className='text-gray-500' sizes='18' weight='500'>
          <span className='text-primary'>{currentStep}</span> / {steps.length}
        </Text>
      </FlexBox>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleRegisterSubmit)} className='space-y-24 px-20'>
          <FunnelCompnent>
            {steps.map((step) => {
              return (
                <ShowStepComponent key={step.step} targetStep={step.step}>
                  {step.step === '1' && <StepOneForm />}
                  {step.step === '2' && <StepTwoForm />}
                  {step.step === '3' && <StepThreeForm />}
                  {step.step === '4' && <StepFourForm />}
                </ShowStepComponent>
              );
            })}
          </FunnelCompnent>
          <div className='absolute bottom-[3rem] left-0 right-0 mx-auto w-full px-20 pb-32 pt-24 xs:w-[520px]'>
            <Button className='w-full' onClick={() => next()}>
              {currentStep !== '4' ? '다음' : '완료'}
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
export default SignupForm;
