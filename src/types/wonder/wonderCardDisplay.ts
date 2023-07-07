import { Wonder } from "../../entity/wonder/wonder";
import { CreatorInWonderCard } from "../creator/creatorDisplay";

export type WonderCard = Pick<Wonder, "id" | "title" | "thumbnail"> & {
  creator: CreatorInWonderCard;
};

export type WonderSearchCard = Pick<
  Wonder,
  "id" | "title" | "thumbnail" | "tags"
> & {
  creator: CreatorInWonderCard;
};
