import { Creator } from ".";
import { WonderSummary } from "../wonder/summary";

export type CreatorDisplay = Pick<
  Creator,
  "id" | "name" | "summary" | "profileImage" | "instagram"
> & {
  createdWonder: WonderSummary[];
  subscribedUsers: null;
};
