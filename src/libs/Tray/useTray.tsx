import { create } from "zustand";
import { ReactNode } from "react";

type TrayStore = {
  target: ReactNode | null;
  isHandle: boolean;
  openTray: (target: ReactNode, isHandle?: boolean) => void;
  closeTray: () => void;
};

export const useTray = create<TrayStore>(() => ({
  target: null,
  isHandle: false,
  openTray: (target, isHandle) => {
    useTray.setState({ target, isHandle: isHandle ?? false });
  },
  closeTray: () => {
    useTray.setState({ target: null, isHandle: false });
  },
}));

export const { openTray, closeTray } = useTray.getState();
