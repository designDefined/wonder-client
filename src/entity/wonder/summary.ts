import { Wonder } from ".";
import { CreatorSummary } from "../creator/summary";
import { User } from "../user";

export type WonderSummary = Pick<
  Wonder,
  "id" | "title" | "tag" | "thumbnail" | "summary" | "schedule" | "location"
> & {
  creator: CreatorSummary;
  likedUsers: User["id"][];
};
