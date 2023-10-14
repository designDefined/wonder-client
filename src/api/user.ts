import api from ".";
import { UserMyInfo } from "../entity/user/myInfo";
import { MutationType } from "./types";

type LoginResult =
  | { needLogin: false; user: UserMyInfo; token: string }
  | {
      needLogin: true;
      type: "test";
      email: string;
    };

export const postUserLogin = (
  type: "test" | "naver",
): MutationType<LoginResult, { email: string }> => ({
  mutationFn: (data) => api.post<LoginResult>(`/user/login?type=${type}`, data),
});
