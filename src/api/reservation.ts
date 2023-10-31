import { authedApi } from ".";
import { MutationType } from "./types";

export const postNewReservation = (
  wonderId: number,
): MutationType<
  { message: "success" },
  { time: string; data: { phoneNumber?: boolean; email: boolean } }
> => ({
  mutationFn: (body) =>
    authedApi.post<{ message: "success" }>(
      `/reservation/new/wonder/${wonderId}`,
      body,
    ),
});
