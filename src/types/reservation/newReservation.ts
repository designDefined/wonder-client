import { ReservationTime } from "../../entity/reservation";
import { User } from "../../entity/user";
import { Wonder } from "../../entity/wonder";

export type ReservationProvidableData = "name" | "phoneNumber" | "email";

export type NewReservation = {
  wonderId: Wonder["id"];
  userId: User["id"];
  time: ReservationTime;
  data: ReservationProvidableData[];
};
