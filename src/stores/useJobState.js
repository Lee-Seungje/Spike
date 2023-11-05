import { create } from "zustand";

export const useJobState = create((set) => ({
  job: "",
  setJob: (value) => set({ job: value }),
}));
