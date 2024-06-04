import React, { createContext, useReducer } from 'react';
import { useSearchParams } from 'next/navigation';
import { StateType, ActionType, CreateBucketContextProps } from '../types';

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return { ...state, [action.payload.name]: action.payload.value };
    case 'SET_CHECK_ITEMS':
      return { ...state, 'my-saving-product': action.payload };
    default:
      return state;
  }
};

export const CreateBucketContext = createContext<CreateBucketContextProps | undefined>(undefined);

export const CreateBucketProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const initialState = {
    'bucket-name': searchParams.get('bucket-name') || '',
    'target-amount': searchParams.get('target-amount') || '',
    'spend-book': searchParams.get('spend-book') || '',
    'saving-book': searchParams.get('saving-book') || '',
    'day-of-week': searchParams.get('day-of-week') || '',
    'savings-amount': searchParams.get('savings-amount') || '',
    'my-saving-product': decodeURIComponent(searchParams.get('my-saving-product') || '')
      .split('|')
      .filter((item) => item.trim() !== '')
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CreateBucketContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateBucketContext.Provider>
  );
};
