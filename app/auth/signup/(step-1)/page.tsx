import dynamic from 'next/dynamic';

const StepOne = dynamic(() => import('./StepOne'), { ssr: false });

const StepOnePage = () => <StepOne />;

export default StepOnePage;
