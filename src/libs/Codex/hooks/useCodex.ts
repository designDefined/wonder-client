import { ReactNode } from "react";
import { Codex } from "../types";

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
