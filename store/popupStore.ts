import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type PopupState = {
  openPopUp: boolean;
  setStorage: (val: boolean) => void;
};

export const usePopupStore = create<PopupState>()(
  persist(
    (set) => {
      return {
        openPopUp: true,
        setStorage: (val) => set({ openPopUp: val })
      };
    },
    {
      name: 'popup',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
