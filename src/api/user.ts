import api from ".";
import { UserMyInfo } from "../entity/user/myInfo";
import { MutationType, QueryType } from "./types";
import { authedApi } from "./index";

type LoginResult =
  | { needLogin: false; token: string }
  | {
      needLogin: true;
      type: "test";
      email: string;
    };

export const getUser: QueryType<UserMyInfo> = {
  queryKey: ["user", "me"],
  queryFn: () => authedApi.get<UserMyInfo>("/user/me"),
};

export const postUserLogin = (
  type: "test" | "naver",
): MutationType<LoginResult, { email: string }> => ({
  mutationFn: (data) => api.post<LoginResult>(`/user/login?type=${type}`, data),
});

export const postUserRegister: MutationType<
  { token: string },
  {
    type: "test" | "naver";
    data: { email: string; name: string; phoneNumber: string };
  }
> = {
  mutationFn: ({ type, data }) => api.post(`/user/register?type=${type}`, data),
};
