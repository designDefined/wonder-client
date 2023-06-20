import { create } from "zustand";
import { ReactNode } from "react";

type OverlayConfig = {
  closeWhenBlurred: boolean;
};
type Overlay = {
  target: ReactNode;
  config: OverlayConfig;
};

type OverlayStore = {
  overlays: Overlay[];
  actions: {
    addOverlay: (overlay: Overlay) => void;
    setOverlay: (overlays: Overlay[]) => void;
    clear: () => void;
  };
};

export const useOverlay = create<OverlayStore>()((set) => ({
  overlays: [],
  actions: {
    addOverlay: (overlay) =>
      set((state) => ({
        overlays: [...state.overlays, overlay],
      })),
    setOverlay: (overlays) => set({ overlays }),
    clear: () => set({ overlays: [] }),
  },
}));
