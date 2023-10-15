import api from ".";
import { stringify } from "qs";
import { QueryType } from "./types";
import { Wonder } from "../entity/wonder/wonder";
import { parseWonderRemote } from "../entity/wonder/wonderFunction";
import { WonderRemote } from "../entity/wonder/wonderRemote";

export const getWonderList: (
  queryParams?: Record<string, unknown>,
  name?: string | number,
) => QueryType<Wonder[]> = (queryParams = {}, name) => ({
  queryKey: ["wonder", "list", name],
  queryFn: () =>
    api.get<Wonder[]>(
      `/wonder/list${queryParams ? "?" + stringify(queryParams) : ""}`,
    ),
});

export const getWonderDetail: (id: number) => QueryType<Wonder> = (id) => ({
  queryKey: ["wonder", "detail", id],
  queryFn: () =>
    api.get<WonderRemote>(`/wonder/detail/${id}`).then(parseWonderRemote),
});
