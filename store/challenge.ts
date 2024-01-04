import { create } from "zustand";

export const useStoreChallenge = create((set) => ({
  challenge: [],
  challengeEdit: [],
  challengeBackUp: [],
  edit: false,
  style: "default",
  toogleEdit: () => set((state: { edit: boolean }) => ({ edit: !state.edit })),
  toogleStyle: (data:any) => set((state: { style: string }) => ({ style: data })),
  setChallenge: (data:any) => set((state: { challenge: any }) => ({ challenge: data})),
  setChallengeEdit: (data:any) => set((state: { challengeEdit: any }) => ({ challengeEdit: data})),
}));
