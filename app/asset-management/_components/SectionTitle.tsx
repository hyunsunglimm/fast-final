import React from 'react';
import Text from '@/components/ui/Text';
const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text sizes='20' weight='bold' variant='h2'>
      {children}
    </Text>
  );
};
export default SectionTitle;
