import { Wonder } from "../../entity/wonder";
import { CreatorInWonderCard } from "../creator/creatorDisplay";

export type WonderCard = Pick<
  Wonder,
  "id" | "title" | "thumbnail" | "tags" | "schedule"
>;
export type WonderCardOnlyThumbnail = Pick<Wonder, "id" | "thumbnail">;

export type WonderSearchCard = Pick<
  Wonder,
  "id" | "title" | "thumbnail" | "tags"
> & {
  creator: CreatorInWonderCard;
};
