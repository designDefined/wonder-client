import { Wonder } from ".";
import { CreatorSummary } from "../creator/summary";
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
  creator: CreatorSummary;
  likedUsers: User["id"][];
};
