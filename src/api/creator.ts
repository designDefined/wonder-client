import { authedApi } from ".";
import { Creator } from "../entity/creator";
import { CreatorDisplay } from "../entity/creator/display";
import { MutationType, QueryType } from "./types";

export const postNewCreator = (): MutationType<
  { creatorId: number },
  { name: string; summary: string; instagram?: string }
> => ({
  mutationFn: (body) =>
    authedApi.post<{ creatorId: number }>(`/creator/new`, body),
});

export const getCreator = (
  creatorId?: Creator["id"],
): QueryType<CreatorDisplay & { isMine: boolean }> => ({
  queryKey: ["creator", creatorId],
  queryFn: () =>
    authedApi.get<CreatorDisplay & { isMine: boolean }>(
      `/creator/${creatorId ?? "invalid_id"}`,
    ),
});

export const putCreator = (
  creatorId?: Creator["id"],
): MutationType<{ success: boolean }, { name?: string; summary?: string }> => ({
  mutationFn: (body) =>
    authedApi.put<{ success: boolean }>(
      `/creator/${creatorId ?? "invalid_id"}/modify`,
      body,
    ),
});
