import { ReactNode } from "react";

export interface Codex extends Record<string, ReactNode | Codex> {
  _index: ReactNode;
  _error?: ReactNode;
  _params?: string[];
}

export type TransitionType = "slideNext" | "slidePrevious";

export type CodexStore = {
  codexTree: Codex | null;
  status: "stable" | "moving";
  transitionType: null | TransitionType;
  currentSide: "A" | "B";
  currentParams: null | Record<string, string | undefined>;
  componentA: ReactNode | null;
  componentB: ReactNode | null;
  isScrollable: boolean;
  provide: (provider: Codex) => void;
  proceedCodex: (path: string[], transitionType?: TransitionType) => void;
  stabilize: () => void;
  redirect: () => void;
  actions: CodexAction;
};

export type CodexAction = {
  navigate: (to: string, transitionType?: TransitionType) => void;
  setScroll: (value: boolean) => void;
};
