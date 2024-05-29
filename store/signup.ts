import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type SignupState = {
  email: string;
  checkEmail: boolean;
  password: string;
  confirmPassword: string;
  name: string;
  phoneNumber: string;
  roadName: string;
  detail: string;
  gender: string;
  setStorage: (field: keyof SignupState, value: string | boolean) => void;
};

export const useSignupStore = create<SignupState>()(
  persist(
    (set) => {
      return {
        email: '',
        checkEmail: false,
        password: '',
        confirmPassword: '',
        name: '',
        phoneNumber: '',
        roadName: '',
        detail: '',
        gender: '',
        setStorage: (field, value) => set({ [field]: value })
      };
    },
    {
      name: 'signup-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
