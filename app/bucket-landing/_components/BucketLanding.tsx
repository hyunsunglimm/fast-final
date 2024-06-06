'use client';

import { IsBackHeader } from '@/components/header';
import BucketLandingPartOne from './BucketLandingPartOne';
import { useQueryString } from '@/shared/hooks/useQueryString';
import BucketLandingPartTwo from './BucketLandingPartTwo';
import Tab from '@/components/ui/Tab';

const BucketLanding = () => {
  const { queryValue } = useQueryString();
  return (
    <>
      <IsBackHeader href='/create-bucket' title='이용안내' defaultColor='#fff' isClose />
      <main>
        <div className='bg-white'>
          <Tab array={['저축생활 1편', '저축생활 2편']} type='underline' tabKey='tab' />
        </div>
        {queryValue('tab') === '저축생활 1편' && <BucketLandingPartOne />}
        {queryValue('tab') === '저축생활 2편' && <BucketLandingPartTwo />}
      </main>
    </>
  );
};

export default BucketLanding;
