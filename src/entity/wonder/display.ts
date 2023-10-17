import { Wonder } from ".";
import { CreatorDisplay } from "../creator/display";
import { User } from "../user";

export type WonderDisplay = Pick<
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
};
