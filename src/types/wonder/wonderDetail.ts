import { Wonder } from "../../entity/wonder";
import { CreatorInWonderDetail } from "../creator/creatorDisplay";

export type WonderDetail = Omit<
  Wonder,
  "creator" | "likedUsers" | "reservations"
> & {
  creator: CreatorInWonderDetail;
  liked: boolean;
  reserved: boolean;
};
