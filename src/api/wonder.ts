import api, { authedApi } from ".";
import { stringify } from "qs";
import { MutationType, QueryType } from "./types";
import { WonderDisplay } from "../entity/wonder/display";
import { WonderSummary } from "../entity/wonder/summary";
import { NewWonderInput } from "../pages/new/NewWonder/NewWonderPage";
import { Creator } from "../entity/creator";
import { Wonder } from "../entity/wonder";

export const getWonderList: (
  queryParams?: Record<string, unknown>,
  name?: string | number,
) => QueryType<WonderSummary[]> = (queryParams = {}, name) => ({
  queryKey: ["wonder", "list", name],
  queryFn: () =>
    api.get<WonderSummary[]>(
      `/wonder/list${queryParams ? "?" + stringify(queryParams, {}) : ""}`,
    ),
  retry: 1,
});

export const getWonderDetail: (id: number) => QueryType<WonderDisplay> = (
  id,
) => ({
  queryKey: ["wonder", "detail", id],
  queryFn: () => api.get<WonderDisplay>(`/wonder/detail/${id}`),
  retry: 1,
});

export const postWonderLike = (
  id: number,
): MutationType<{ message: "success" }, boolean> => ({
  mutationFn: (is: boolean) =>
    authedApi.post<{ message: "success" }>(
      `/wonder/like/${id}?${stringify({ is })}`,
    ),
});

export const postNewWonder = (): MutationType<
  { wonderId: Wonder["id"] },
  {
    data: NewWonderInput;
    creatorId: Creator["id"];
  }
> => ({
  mutationFn: (body) =>
    authedApi.post<{ wonderId: Wonder["id"] }>(`/wonder/new`, body),
});

export const putNewWonder = (): MutationType<
  { success: boolean },
  {
    data: NewWonderInput;
    creatorId: Creator["id"];
    wonderId: Wonder["id"];
  }
> => ({
  mutationFn: (body) => authedApi.put(`/wonder/${body.wonderId}/modify`, body),
});
