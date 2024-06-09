'use client';
import { createContext, useContext, useState } from 'react';
import { initialTogetherData } from '../_components/look-together/data';
import { ShareDataType } from '@/shared/types/budgetCalendarType';
import useAddOrRemoveEmojiHooks from '../hooks/useAddOrRemoveEmojiHooks';

type ValueType = {
  openTotalReactionSheet: boolean;
  openAddEmojiSheet: boolean;
  shareData: ShareDataType;
  reactionDate: string;
  setOpenTotalReactionSheet: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenAddEmojiSheet: React.Dispatch<React.SetStateAction<boolean>>;
  setReactionDate: React.Dispatch<React.SetStateAction<string>>;
  handleAddEmojiClick: (e: React.MouseEvent<HTMLButtonElement>, date?: string) => void;
};
const SubmitEmojiContext = createContext<ValueType>({
  openTotalReactionSheet: false,
  openAddEmojiSheet: false,
  setOpenTotalReactionSheet: () => {},
  setOpenAddEmojiSheet: () => {},
  reactionDate: '',
  shareData: {
    totalCount: 0,
    daily: []
  },
  setReactionDate: () => {},
  handleAddEmojiClick: () => {}
});

const SubmitEmojiProvider = ({ children }: { children: React.ReactNode }) => {
  const [openTotalReactionSheet, setOpenTotalReactionSheet] = useState(false);
  const [openAddEmojiSheet, setOpenAddEmojiSheet] = useState(false);
  const [reactionDate, setReactionDate] = useState('');
  const { shareData, handleAddEmojiClick } = useAddOrRemoveEmojiHooks(
    reactionDate,
    initialTogetherData
  );

  const value = {
    openTotalReactionSheet,
    openAddEmojiSheet,
    setOpenAddEmojiSheet,
    setOpenTotalReactionSheet,
    shareData,
    reactionDate,
    setReactionDate,
    handleAddEmojiClick
  };

  return <SubmitEmojiContext.Provider value={value}>{children}</SubmitEmojiContext.Provider>;
};

export default SubmitEmojiProvider;

export const useSubmitEmojiContext = () => {
  return useContext(SubmitEmojiContext);
};
