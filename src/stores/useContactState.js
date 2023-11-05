import { create } from "zustand";

export const useContactState = create((set) => ({
  contact: "",
  setContact: (value) => set({ contact: value }),
}));
