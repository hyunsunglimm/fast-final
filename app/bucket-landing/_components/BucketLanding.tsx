'use client';

import BucketLandingPartOne from './BucketLandingPartOne';
import { useQueryString } from '@/shared/hooks/useQueryString';
import BucketLandingPartTwo from './BucketLandingPartTwo';

const BucketLanding = () => {
  const { queryValue } = useQueryString();
  return (
    <main>
      {queryValue('tab') === '저축생활 1편' && <BucketLandingPartOne />}
      {queryValue('tab') === '저축생활 2편' && <BucketLandingPartTwo />}
    </main>
  );
};

export default BucketLanding;
