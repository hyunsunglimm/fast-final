'use client';
import { createContext, useContext, useState } from 'react';
type ValueType = {
  openWallet: boolean;
  setOpenWallet: React.Dispatch<React.SetStateAction<boolean>>;
};
const OpenWalletContext = createContext<ValueType>({ openWallet: false, setOpenWallet: () => {} });

const OpenWalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [openWallet, setOpenWallet] = useState(false);

  const value = { openWallet, setOpenWallet };

  return <OpenWalletContext.Provider value={value}>{children}</OpenWalletContext.Provider>;
};

export default OpenWalletProvider;

export const useOpenWallet = () => {
  return useContext(OpenWalletContext);
};
