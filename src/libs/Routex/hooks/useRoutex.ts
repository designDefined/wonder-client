import { create } from "zustand";
import { ReactNode } from "react";
import { RoutexType } from "../types";

type RoutexStore = {
  allRoutexes: RoutexType[];
  currentComponent: ReactNode | null;
  subComponent: ReactNode | null;
  currentPath: string;
  actions: RoutexActions;
};

type RoutexActions = {
  loadProvider: (provider: RoutexType[]) => void;
};

export const useRoutex = create<RoutexStore>()((set, get) => ({
  allRoutexes: [],
  currentComponent: null,
  subComponent: null,
  currentPath: "",
  actions: {
    loadProvider: (provider) => set({ allRoutexes: provider }),
  },
}));
