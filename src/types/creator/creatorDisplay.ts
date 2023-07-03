import { Creator } from "../../entity/creator/creator";

export type CreatorDisplay = Pick<Creator, "id" | "name" | "profileImage">;

export type CreatorInWonderCard = Pick<Creator, "id" | "name" | "profileImage">;
export type CreatorInWonderDetail = Pick<
  Creator,
  "id" | "name" | "profileImage"
> & { subscribed: boolean };
