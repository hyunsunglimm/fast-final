import dynamic from 'next/dynamic';

const StepThree = dynamic(() => import('./StepThree'), { ssr: false });

const StepThreePage = () => <StepThree />;

export default StepThreePage;
