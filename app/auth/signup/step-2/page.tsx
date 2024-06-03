import dynamic from 'next/dynamic';

const StepTwo = dynamic(() => import('./StepTwo'), { ssr: false });

const StepTwoPage = () => <StepTwo />;

export default StepTwoPage;
