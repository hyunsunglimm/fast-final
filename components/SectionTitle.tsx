import React from 'react';
import Text from '@/components/ui/Text';
const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text sizes='20' weight='600' variant='h2' className='mb-[1.6rem] mt-[4rem]'>
      {children}
    </Text>
  );
};
export default SectionTitle;
