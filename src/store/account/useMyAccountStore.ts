import { create } from "zustand";
import { User } from "../../entity/user/user";
import { Fetchable } from "../../tools/types/api";
import { getJSON } from "../../tools/utils/api";

type AdoptedUser = Pick<
  User,
  | "id"
  | "name"
  | "nickname"
  | "phoneNumber"
  | "email"
  | "created_at"
  | "last_modified_at"
>;

type MyAccountStore = Fetchable<AdoptedUser> & {
  actions: {
    login: (name: string) => Promise<void>;
    logout: () => void;
  };
};

export const useMyAccountStore = create<MyAccountStore>()((set, get, a) => ({
  isLoaded: false,
  isPending: false,
  data: null,
  actions: {
    login: async () => {
      set({ isPending: true });
      const res = await getJSON<AdoptedUser>("/login");
      set({ isLoaded: true, data: res });
    },
    logout: () => set({ isLoaded: false, isPending: false, data: null }),
  },
}));
