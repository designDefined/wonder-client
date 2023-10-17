import { Wonder } from ".";
import { CreatorDisplay } from "../creator/display";
import { User } from "../user";

export type WonderSummary = Pick<
  Wonder,
  "id" | "title" | "tag" | "thumbnail" | "summary" | "schedule" | "location"
> & {
  creator: CreatorDisplay;
  likedUsers: User["id"][];
};
