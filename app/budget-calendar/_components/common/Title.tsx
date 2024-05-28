import React, { ReactNode } from 'react';
import FlexBox from '@/components/ui/FlexBox';

type TitleProps = {
  title: string;
  children?: ReactNode;
  className?: string;
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
};

const Title: React.FC<TitleProps> = ({ title, children, className, justifyContent }) => {
  return (
    <>
      {children ? (
        <FlexBox
          alignItems='center'
          justifyContent={justifyContent ? justifyContent : 'between'}
          className={className}
        >
          <h2 className='mr-8 text-18 font-600'>{title}</h2>
          {children}
        </FlexBox>
      ) : (
        <h2 className={`text-18 font-600 ${className}`}>{title}</h2>
      )}
    </>
  );
};

export default Title;
