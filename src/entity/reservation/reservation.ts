import { User } from "../user/user";
import { DateInformation } from "../utility/utility";
import { Wonder, WonderSchedule } from "../wonder/wonder";

export type ReservationData = {
  wonderId: Wonder["id"];
  userId: User["id"];
  name?: User["name"];
  phoneNumber?: User["phoneNumber"];
  email?: User["email"];
};
export type ReservationTime = WonderSchedule;

export type Reservation = {
  id: number;
  wonder: Wonder;
  user: User;
  time: ReservationTime;
  data: ReservationData;
  dateInformation: DateInformation;
};
