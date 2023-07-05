import { Creator } from "../../entity/creator/creator";

/**
 * !Deprecated (safe delete layer)
 */
export type CreatorDisplay = Pick<Creator, "id" | "name" | "profileImage">;
/**
 * Deprecated End
 */

export type CreatorInWonderCard = Pick<Creator, "id" | "name" | "profileImage">;
export type CreatorInWonderDetail = Pick<
  Creator,
  "id" | "name" | "profileImage"
> & { subscribed: boolean };
export type OwnedCreator = Pick<Creator, "id" | "profileImage" | "name">;
