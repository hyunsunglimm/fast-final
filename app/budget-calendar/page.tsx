import React from 'react';
import Input from '@/components/ui/Input';

const BudgetCalendarPage = () => {
  return (
    <div>
      <p>가계부</p>
      <Input placeholder='Enter text...' />
      <Input placeholder='Enter text...' borderType='bottom' action='error' />
    </div>
  );
};

export default BudgetCalendarPage;
