import { User } from ".";
import { CreatorSummary } from "../creator/summary";
import { ReservationForUser } from "../reservation/forUser";
import { WonderSummary } from "../wonder/summary";

export type UserDisplay = Pick<
  User,
  | "id"
  | "nickname"
  | "platformType"
  | "name"
  | "phoneNumber"
  | "email"
  | "profileImage"
> & {
  likedWonders: WonderSummary[];
  reservedWonders: ReservationForUser[];
  ticketBook: ReservationForUser[];
  ownedCreators: CreatorSummary[];
};
