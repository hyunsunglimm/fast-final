import React, { createContext, useReducer, useContext } from 'react';
import { useSearchParams } from 'next/navigation';
export type StateType = {
  'bucket-name': string;
  'target-amount': string;
  'spend-book': string;
  'saving-book': string;
  'day-of-week': string;
  'savings-amount': string;
  'my-saving-product': string[];
};

type ActionType =
  | { type: 'SET_INPUT_VALUE'; payload: { name: keyof StateType; value: string } }
  | { type: 'SET_CHECK_ITEMS'; payload: string[] };

type CreateBucketContextProps = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

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

const CreateBucketContext = createContext<CreateBucketContextProps | undefined>(undefined);

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

export const useCreateBucketContext = () => {
  const context = useContext(CreateBucketContext);
  if (!context) {
    throw new Error('use provider');
  }
  return context;
};
