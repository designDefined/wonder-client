import { create } from "zustand";
import { ReactNode } from "react";

type TrayStore = {
  target: (() => ReactNode) | null;
  isHandle: boolean;
  props: object;
  needResize: boolean;
  openTray: (target: () => ReactNode, props?: object) => void;
  closeTray: () => void;
  updateTrayProp: (props: object) => void;
  requestTrayResize: (bool?: boolean) => void;
};

export const useTray = create<TrayStore>()(() => ({
  target: null,
  isHandle: false,
  props: {},
  needResize: false,
  openTray: (target, props) => {
    useTray.setState({ target, props });
  },
  closeTray: () => {
    useTray.setState({ target: null, props: {} });
  },
  updateTrayProp: (props) => {
    useTray.setState({ props });
  },
  requestTrayResize: (bool = true) => {
    useTray.setState({ needResize: bool ?? false });
  },
}));

export const { openTray, closeTray, updateTrayProp, requestTrayResize } =
  useTray.getState();
