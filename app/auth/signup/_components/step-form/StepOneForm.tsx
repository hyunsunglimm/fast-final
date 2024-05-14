'use client';

import { CardContent } from '@/components/ui/card';
import IdForm from '../IdForm';
import PwForm from '../PwForm';
import { useState } from 'react';

const INITAIL_ENTERED_VALUES = {
  id: '',
  password: ''
};

export type EnteredValues = {
  id: string;
  password: string;
};

export type SetEnteredValues = (value: EnteredValues) => EnteredValues;

export const StepOneForm = () => {
  const [enteredValues, setEnteredValues] = useState<EnteredValues>(INITAIL_ENTERED_VALUES);

  return (
    <CardContent flexDirection='col' className=''>
      <IdForm setEnteredValues={setEnteredValues} />
      <PwForm enteredValues={enteredValues} setEnteredValues={setEnteredValues} />
    </CardContent>
  );
};
