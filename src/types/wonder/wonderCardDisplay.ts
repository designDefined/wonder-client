import { Wonder } from "../../entity/wonder/wonder";
import { CreatorDisplay } from "../creator/creatorDisplay";

export type WonderCardDisplay = Pick<
  Wonder,
  "id" | "title" | "tags" | "thumbnail"
> & {
  creator: CreatorDisplay;
};
