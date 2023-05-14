import { ReactNode } from "react";
import { Codex } from "../new";

type CodexExample = {
  idle: (all: Codex) => {
    all: Codex;
  };
  stable: (path: string[]) => {
    path: string;
    params: [string, string][];
    renderedElement: ReactNode | null;
    all: Codex;
  };
  moving: (path: string[]) => {
    path: string;
    transitionType: string;
    renderedElement: ReactNode | null;
    all: Codex;
  };
};
/*
const codexExample: CodexExample = {
  idle: (all) => ({ all }),
  stable: (path) => {
    return { path: "", params: [], renderedElement: null };
  },
  moving: (path) => {
    return { path: "", transitionType: "never", renderedElement: null };
  },
};
*/
