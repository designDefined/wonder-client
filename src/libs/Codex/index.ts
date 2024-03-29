import { create } from "zustand";
import { CodexStore, TransitionType } from "./types";
import { createBrowserHistory } from "history";
import { searchCodex } from "./codexFunctions";
import { closeTray } from "../Tray/useTray";

export const useCodex = create<CodexStore>()((set, get) => {
  const history = createBrowserHistory();

  history.listen((update) => {
    const pathArray = update.location.pathname.split("/").slice(1);
    if (update.location.state) {
      const state = update.location.state as { transitionType: TransitionType };
      get().proceedCodex(pathArray, state.transitionType);
    } else {
      get().proceedCodex(pathArray);
    }
  });

  return {
    codexTree: null,
    status: "stable",
    transitionType: null,
    currentSide: "A",
    currentParams: null,
    componentA: null,
    componentB: null,
    isScrollable: true,
    provide: (provider) => {
      const firstPath = history.location.pathname;

      const { element: firstComponent, params } = searchCodex(
        provider,
        firstPath.split("/").slice(1),
      );

      set({
        codexTree: provider,
        currentSide: "A",
        componentA: firstComponent,
        currentParams: params ?? null,
      });
    },
    proceedCodex: (path, transitionType?: TransitionType) => {
      const { codexTree, currentSide } = get();
      if (codexTree) {
        const searchResult = searchCodex(codexTree, path);
        const nextState: Partial<CodexStore> = {};
        if (currentSide === "A") {
          nextState.currentSide = "B";
          nextState.componentB = searchResult.element;
          if (!transitionType) nextState.componentA = null;
        } else {
          nextState.currentSide = "A";
          nextState.componentA = searchResult.element;
          if (!transitionType) nextState.componentB = null;
        }
        if (transitionType) {
          nextState.status = "moving";
          nextState.transitionType = transitionType;
        }
        nextState.currentParams = searchResult.params ?? null;
        closeTray();
        set(nextState);
      }
    },
    stabilize: () => {
      const { status, currentSide } = get();
      if (status === "moving") {
        if (currentSide === "A") {
          set({ status: "stable", transitionType: null, componentB: null });
        } else {
          set({ status: "stable", transitionType: null, componentA: null });
        }
      }
    },
    redirect: () => {
      console.log(history.location.pathname);
    },
    actions: {
      navigate: (to, transitionType) => {
        transitionType
          ? history.push(to, { transitionType })
          : history.push(to);
      },
      setScroll: (value) => set({ isScrollable: value }),
    },
  };
});

export const { navigate, setScroll } = useCodex.getState().actions;
export const useParams = () => useCodex.getState().currentParams;
