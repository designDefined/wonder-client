import { Creator } from "../../entity/creator/creator";

export type CreatorInWonderCard = Pick<Creator, "id" | "name" | "profileImage">;
export type CreatorInWonderDetail = Pick<
  Creator,
  "id" | "name" | "profileImage"
> & { subscribed: boolean };
export type OwnedCreator = Pick<Creator, "id" | "profileImage" | "name">;
