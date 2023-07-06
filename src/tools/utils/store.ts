import { create, StoreApi } from "zustand";

type Setter<T> = StoreApi<T>["setState"];
type Getter<T> = StoreApi<T>["getState"];

type Machine<T, U> = T & { actions: U };

export const machine = <
  T extends Record<string, any>,
  U extends Record<string, any>,
>(
  set: Setter<T>,
  get: Getter<T>,
  state: T,
  actions: U,
): Machine<T, U> => {
  return { ...state, actions };
};

type Sample = {
  editable: boolean;
  data: string;
  actions: {
    setSample: (value: string) => void;
    toggleEditable: () => void;
  };
};
export const useSampleStore = create<Sample>()((set, get) => ({
  editable: true,
  data: "",
  actions: {
    setSample: (value) => {
      if (get().editable) {
        set({ data: value });
      }
    },
    toggleEditable: () => set((state) => ({ editable: !state.editable })),
  },
}));

export const useSampleAction = () => useSampleStore.getState().actions;
