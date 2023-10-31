import { User } from ".";
import { CreatorSummary } from "../creator/summary";

export type UserSummary = Pick<User, "id" | "name" | "profileImage">;

export type UserMySummary = UserSummary & {
  ownedCreators: CreatorSummary[];
};
