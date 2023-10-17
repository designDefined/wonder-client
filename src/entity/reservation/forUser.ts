import { Reservation } from ".";
import { WonderSummary } from "../wonder/summary";

export type ReservationForUser = Pick<Reservation, "id" | "time" | "data"> & {
  wonder: WonderSummary;
};
