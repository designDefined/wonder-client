import { create } from "zustand";
import { ReactNode } from "react";

type TrayStore = {
  target: (() => ReactNode) | null;
  needResize: boolean;
  openTray: (target: () => ReactNode) => void;
  closeTray: () => void;
  requestTrayResize: (bool?: boolean) => void;
};

export const useTray = create<TrayStore>()(() => ({
  target: null,
  needResize: false,
  openTray: (target) => {
    useTray.setState({ target });
  },
  closeTray: () => {
    useTray.setState({ target: null });
  },
  requestTrayResize: (bool = true) => {
    useTray.setState({ needResize: bool ?? false });
  },
}));

export const { openTray, closeTray, requestTrayResize } = useTray.getState();
