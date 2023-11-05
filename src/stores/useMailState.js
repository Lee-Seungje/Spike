import { create } from "zustand";

export const useMailState = create((set) => ({
  mail: "",
  setMail: (value) => set({ mail: value }),
}));
