import { authedApi } from ".";
import { MutationType } from "./types";

export const postNewCreator = (): MutationType<
  { creatorId: number },
  { name: string; summary: string; instagram?: string }
> => ({
  mutationFn: (body) =>
    authedApi.post<{ creatorId: number }>(`/creator/new`, body),
});
3;
