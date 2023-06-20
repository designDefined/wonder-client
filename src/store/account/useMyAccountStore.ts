import { create } from "zustand";
import { User } from "../../entity/user/user";
type MyAccountStore = {
  data: null | User;
  actions: {
    login: (user: User) => void;
    logout: () => void;
  };
};

export const useMyAccountStore = create<MyAccountStore>()((set, get, a) => ({
  data: null,
  actions: {
    login: (user) => set({ data: user }),
    logout: () => set({ data: null }),
  },
}));
