import { Reservation } from ".";
import { UserSummary } from "../user/summary";

export type ReservationForCreator = Pick<
  Reservation,
  "id" | "time" | "data"
> & {
  user: UserSummary;
};
