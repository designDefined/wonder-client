import { create } from "zustand";
import { Creator } from "../../entity/creator";
import {
  UserLoggedIn,
  UserNeedRegister,
  UserRegisterForm,
} from "../../types/user/userAuthorization";
import api, { authedApi } from "../../api";
import { navigate } from "../../libs/Codex";
import {
  deleteAutoLogin,
  getUserToken,
  saveAutoLogin,
} from "../../libs/AutoLogin/autoLogin";

type AccountStore = {
  user: UserLoggedIn | null;
  creator: Creator | null;
  creatorToken: string | null;
  registerEmail: string | null;
  actions: {
    //loginUser: (code: string) => Promise<void>;
    testLoginUser: (email: string, redirectURL?: string) => Promise<void>;
    autoLoginUser: () => Promise<void>;
    registerUser: (
      registerForm: UserRegisterForm,
      redirectURL?: string,
    ) => Promise<void>;
    logoutUser: () => void;
  };
};

export const useAccount = create<AccountStore>()((set) => ({
  user: null,
  userToken: null,
  creator: null,
  creatorToken: null,
  registerEmail: null,
  //loginUser: async (code: string) => {},
  actions: {
    testLoginUser: async (email: string, redirectURL = "/") => {
      try {
        const response: UserLoggedIn | UserNeedRegister = await api.post(
          "/user/testLogin",
          { email },
        );
        if (response.needRegister) {
          set({ registerEmail: response.email });
          navigate("/register", "slideNext");
        } else {
          saveAutoLogin("user", response.token);
          set({ user: response });
          navigate(redirectURL, "slidePrevious");
        }
      } catch (e) {
        console.error(e);
      }
    },
    autoLoginUser: async () => {
      const token = getUserToken();
      if (token) {
        try {
          const response: UserLoggedIn = await authedApi.post(
            "/user/autoLogin",
            {},
          );
          set({ user: response });
        } catch (e) {
          deleteAutoLogin();
          console.error(e);
        }
      }
    },
    registerUser: async (registerForm: UserRegisterForm, redirectURL = "/") => {
      try {
        const response: UserLoggedIn = await api.post(
          `/user/testRegister?access_token=test`,
          registerForm,
        );
        set({ user: response });
        saveAutoLogin("user", response.token);
        navigate(redirectURL, "slidePrevious");
      } catch (e) {
        console.error(e);
      }
    },
    logoutUser: () => {
      set({ user: null });
      deleteAutoLogin();
    },
  },
}));

export const { testLoginUser, autoLoginUser, registerUser } =
  useAccount.getState().actions;
