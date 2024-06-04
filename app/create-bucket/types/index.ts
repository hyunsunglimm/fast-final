export type StateType = {
  'bucket-name': string;
  'target-amount': string;
  'spend-book': string;
  'saving-book': string;
  'day-of-week': string;
  'savings-amount': string;
  'my-saving-product': string[];
};

export type ActionType =
  | { type: 'SET_INPUT_VALUE'; payload: { name: keyof StateType; value: string } }
  | { type: 'SET_CHECK_ITEMS'; payload: string[] };

export type CreateBucketContextProps = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

export type CreateBucketStep = {
  title: string;
  stepText: string;
  imgSrc: string;
};
export type CreateBucketConfigType = { [key: number]: CreateBucketStep };
