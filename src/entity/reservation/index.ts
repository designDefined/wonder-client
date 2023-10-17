import { User } from "../user";
import { DateInformation } from "../utility/utility";
import { Wonder } from "../wonder";

export type ReservationData = {
  name?: User["name"];
  phoneNumber?: User["phoneNumber"];
  email?: User["email"];
};
export type ReservationTime = Wonder["schedule"][number];

export type Reservation = {
  id: number;
  wonder: Wonder;
  user: User;
  time: ReservationTime;
  data: ReservationData;
  dateInformation: DateInformation;
};
