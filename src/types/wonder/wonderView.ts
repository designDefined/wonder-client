import { CreatorDisplay } from "../creator/creatorDisplay";
import { Wonder } from "../../entity/wonder/wonder";

export type WonderView = Omit<Wonder, "creator"> & {
  creator: CreatorDisplay;
};
