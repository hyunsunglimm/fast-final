import React from 'react';
import Text from '@/components/ui/Text';

type BottomSheetTitleProps = {
  title: string;
  description: string;
};

const BottomSheetTitle = ({ title, description }: BottomSheetTitleProps) => {
  return (
    <>
      <Text variant='h3' sizes='20' weight='700' className='mb-8'>
        {title.split('&&').map((text, index) => {
          return (
            <React.Fragment key={index}>
              {text}
              {index < title.split('&&').length - 1 && <br />}
            </React.Fragment>
          );
        })}
      </Text>
      <Text variant='p' className='text-gray-700'>
        {description}
      </Text>
    </>
  );
};

export default BottomSheetTitle;
