'use client';

import Text from '@/components/ui/Text';
import CustomNavigationCard from './CustomNavigationCard';
import { FINANCIAL_PRODUCT_NAVIGATION } from '@/shared/utils/financial-product/staticData';
import DragContainer from '@/components/DragContainer';
import { useState } from 'react';

const CustomNavigationSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <section className='mb-40'>
      <Text sizes='20' variant='h1' weight='700' className='mb-20'>
        맞춤탐색
      </Text>
      <DragContainer setIsDragging={setIsDragging}>
        {FINANCIAL_PRODUCT_NAVIGATION.map((info) => {
          return (
            <CustomNavigationCard
              key={info.title}
              recommendationInfo={info}
              dragging={isDragging}
            />
          );
        })}
      </DragContainer>
    </section>
  );
};

export default CustomNavigationSection;
