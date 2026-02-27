import { create } from "zustand";
export const useMenuStore = create((set) => ({
  itemselect: null,
  setItemSelect: (p) =>
    set({
      itemselect: p,
    }),
}));
