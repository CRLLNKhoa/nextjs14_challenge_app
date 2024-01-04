import { create } from "zustand";

export const useStoreUser = create((set) => ({
  userData: undefined,
  setUserData: (data:any) => set((state: { userData: any }) => ({ userData: data })),
}));
