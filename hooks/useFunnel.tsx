'use client';
import React, { ReactElement, ReactNode } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

type StepProps = {
  stepsElement: string;
  children: ReactNode;
};
type FunnelProps = {
  children: Array<ReactElement<StepProps>>;
};
type SetStepOptions = {
  stepChangeType?: 'push' | 'replace';
  preserveQuery?: boolean;
  query?: Record<string, any>;
};

export const useFunnel = <Steps extends string[]>(
  param: string,
  options?: {
    stepQueryKey?: string;
    initialStep?: Steps[number];
    onStepChange?: (name: Steps[number]) => void;
  }
) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const currentStep = params.get(param) ?? options?.initialStep;

  /**
   * @param stepsElement:steps[]중 보여져야 할 요소,
   * @returns children || null
   */
  const ShowStep = ({ stepsElement, children }: StepProps) => {
    if (stepsElement === currentStep) {
      return children;
    }
    return null;
  };
  const setStep = (step: Steps[number], setStepOptions?: SetStepOptions) => {
    const url = `${pathname}?${param}=${step}`;
    switch (setStepOptions?.stepChangeType) {
      case 'replace':
        router.replace(url);
        return;
      case 'push':
      default:
        router.push(url);
        return;
    }
  };
  // 여러 단계의 Step 컴포넌트 중 현재 활성화된 스텝을 렌더링하는 Funnel
  // find를 통해 Step 중 현재 Step을 찾아 렌더링
  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.stepsElement === currentStep);

    return <>{targetStep}</>;
  };

  return { Funnel, ShowStep, setStep } as const;
};
