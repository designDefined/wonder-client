import { Wonder } from ".";
import { CreatorDisplay } from "../creator/display";
import { ReservationForCreator } from "../reservation/forCreator";
import { User } from "../user";

export type WonderOwned = Pick<
  Wonder,
  | "id"
  | "title"
  | "tag"
  | "thumbnail"
  | "summary"
  | "content"
  | "schedule"
  | "location"
  | "reservationProcess"
> & {
  creator: CreatorDisplay;
  likedUsers: User["id"][];
  reservations: ReservationForCreator[];
};
