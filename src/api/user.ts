import api from ".";
import { MutationType, QueryType } from "./types";
import { authedApi } from "./index";
import { UserDisplay } from "../entity/user/display";
import { UserMySummary } from "../entity/user/summary";

type LoginResult =
  | { needLogin: false; token: string }
  | {
      needLogin: true;
      type: "test";
      email: string;
    };

export const getMe: QueryType<UserMySummary> = {
  queryKey: ["user", "me"],
  queryFn: () => authedApi.get<UserDisplay>("/user/me"),
  retry: 1,
  staleTime: 5000,
};

export const getMeDetail: QueryType<UserDisplay> = {
  queryKey: ["user", "me", "detail"],
  queryFn: () => authedApi.get<UserDisplay>("/user/me/detail"),
  retry: 1,
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
