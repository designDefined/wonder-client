import api, { authedApi } from ".";
import { stringify } from "qs";
import { MutationType, QueryType } from "./types";
import { WonderDisplay } from "../entity/wonder/display";
import { WonderSummary } from "../entity/wonder/summary";

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
