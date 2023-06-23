import { create } from "zustand";
import { User } from "../../entity/user/user";
import { UserSummary } from "../../types/user/userSummary";
type MyAccountStore = {
  data: null | UserSummary;
  actions: {
    login: (user: UserSummary) => void;
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
