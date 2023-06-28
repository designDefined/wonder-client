import { create } from "zustand";
import { ReactNode } from "react";

type TrayStore = {
  target: ReactNode | null;
  isHandle: boolean;
  props: Record<string, any>;
  openTray: (target: ReactNode, props?: Record<string, any>) => void;
  closeTray: () => void;
  updateTrayProp: (props: Record<string, any>) => void;
};

export const useTray = create<TrayStore>(() => ({
  target: null,
  isHandle: false,
  props: {},
  openTray: (target, props) => {
    useTray.setState({ target, props });
  },
  closeTray: () => {
    useTray.setState({ target: null, isHandle: false });
  },
  updateTrayProp: (props) => {
    useTray.setState({ props });
  },
}));

export const { openTray, closeTray, updateTrayProp } = useTray.getState();
