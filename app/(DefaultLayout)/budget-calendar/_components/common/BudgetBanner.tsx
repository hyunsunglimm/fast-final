import React from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import { BudgetBannerProps } from '@/shared/types/budgetCalendarType';
import IconDot from './IconDot';

const BudgetBanner = ({ icon, text, showArrow, className, ...props }: BudgetBannerProps) => {
  return (
    <FlexBox
      alignItems='center'
      justifyContent='between'
      className={`cursor-pointer rounded-md bg-banner p-16 text-14 ${className}`}
      {...props}
    >
      <FlexBox alignItems='center'>
        {icon ? (
          <Icon src='/icons/budget-calendar/small-pig.svg' alt='pig' className='mr-12' />
        ) : (
          <IconDot />
        )}
        <p>{text}</p>
      </FlexBox>
      {showArrow && (
        <Icon src='/icons/system-icon/arrow/arrow-right-gray.svg' alt='오른쪽화살표' size='16' />
      )}
    </FlexBox>
  );
};

export default BudgetBanner;
