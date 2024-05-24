'use client';
import React, { ReactElement, ReactNode } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import type { NoEmptyArray } from '@/types/noEmptyArray';

type StepProps = {
  targetStep: string;
  children: ReactNode;
};
type FunnelProps = {
  children: Array<ReactElement<StepProps>>;
};
type SetStepOptions = {
  stepChangeType?: 'push' | 'replace';
};

/**
 * @param stepQueryKey 쿼리 파라미터의 'Key'을 결정
 * @param initialStep 쿼리 파라미터의 'Default Step'를 결정
 * @returns Funnel, ShowStep, setStep
 */
export const useFunnel = <Steps extends NoEmptyArray<string>>(
  stepQueryKey: string,
  initialStep?: Steps[number]
) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const currentStep = params.get(stepQueryKey) ?? initialStep;

  // console.log('funnel currentStep', currentStep);
  /**
   * @param targetStep:steps[]중 보여져야 할 요소,
   * @returns children || null
   */
  const ShowStepComponent = ({ children }: StepProps) => <>{children}</>;

  /**
   * @param nextStep 다음 스텝의 값
   * @param setStepOptions router 방식을 결정
   * @returns
   */
  const setStep = (nextStep: Steps[number], setStepOptions?: SetStepOptions) => {
    const url = `${pathname}?${stepQueryKey}=${nextStep}`;
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

  /**
   * @param children[]
   * @returns 현재 Step을 찾아 렌더링
   */
  const FunnelCompnent = ({ children }: FunnelProps) => {
    const TargetStepComp = children.find((childStep) => childStep.props.targetStep === currentStep);

    return <>{TargetStepComp}</>;
  };

  return { FunnelCompnent, ShowStepComponent, setStep, currentStep } as const;
};
