import React, { ReactNode } from 'react';
import FlexBox, { flexBoxVariants } from '@/components/ui/FlexBox';
import { VariantProps } from 'class-variance-authority';

type TitleProps = {
  title: string;
  children?: ReactNode;
  className?: string;
  justifyContent?: VariantProps<typeof flexBoxVariants>['justifyContent'];
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
        <h2 className={`text-18 font-600${className ? ` ${className}` : ''}`}>{title}</h2>
      )}
    </>
  );
};

export default Title;
