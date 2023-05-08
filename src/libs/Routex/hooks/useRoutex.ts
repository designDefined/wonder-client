import { create } from "zustand";
import { ReactNode } from "react";
import { RoutexType } from "../types";

export type RoutexSide = "A" | "B";
type RoutexTransition = "stable" | "slidePrev" | "slideNext";
type RoutexConfig = {
  transition: { duration: number };
};
const defaultConfig: RoutexConfig = {
  transition: { duration: 1000 },
};

type RoutexStore = {
  allRoutexes: RoutexType[];
  status: RoutexTransition;
  currentSide: RoutexSide;
  currentPath: string;
  componentA: ReactNode | null;
  componentB: ReactNode | null;
  config: RoutexConfig;
  actions: RoutexActions;
};

type RoutexActions = {
  loadProvider: (provider: RoutexType[]) => void;
  loadIndex: (path: string) => void;
  navigate: (to: string, isPrev?: boolean) => void;
};

export const useRoutex = create<RoutexStore>()((set, get) => ({
  status: "stable",
  allRoutexes: [],
  currentSide: "A",
  currentPath: "",
  componentA: null,
  componentB: null,
  config: defaultConfig,
  actions: {
    loadProvider: (provider) => set({ allRoutexes: provider }),
    loadIndex: (path) => {
      const { allRoutexes, currentSide, componentA } = get();

      //다음 라우트 찾기
      const nextRoutex = allRoutexes.find((routex) => routex.path === path);
      if (!nextRoutex) return;

      //컴포넌트 교체 및 새로운 상태 생성
      const newState: Partial<RoutexStore> = {};
      newState.currentPath = nextRoutex.path;
      newState.componentA = nextRoutex.component;

      //상태 변경
      set(newState);
    },
    navigate: (to, isPrev) => {
      const { allRoutexes, currentSide, componentA, componentB, config } =
        get();

      //다음 라우트 찾기
      const nextRoutex = allRoutexes.find((routex) => routex.path === to);
      if (!nextRoutex) return;

      //히스토리 변경
      history.pushState({ data: to }, "", to);

      //컴포넌트 교체 및 새로운 상태 생성
      const newState: Partial<RoutexStore> = {};
      newState.currentPath = nextRoutex.path;
      newState.status = isPrev ? "slidePrev" : "slideNext";
      if (currentSide === "A") {
        newState.componentB = nextRoutex.component;
        newState.currentSide = "B";
      } else {
        newState.componentA = nextRoutex.component;
        newState.currentSide = "A";
      }
      //상태 변경
      set(newState);

      //변환 후 상태 다시 원래대로 변경
      setTimeout(() => {
        set({ componentA: null });
        requestAnimationFrame(() => set({ status: "stable" }));
      }, config.transition.duration);
    },
  },
}));
