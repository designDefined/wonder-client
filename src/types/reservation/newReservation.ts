import { ReservationTime } from "../../entity/reservation/reservation";
import { User } from "../../entity/user/user";
import { Wonder } from "../../entity/wonder/wonder";

export type ReservationProvidableData = "name" | "phoneNumber" | "email";

export type NewReservation = {
  wonderId: Wonder["id"];
  userId: User["id"];
  time: ReservationTime;
  data: ReservationProvidableData[];
};
