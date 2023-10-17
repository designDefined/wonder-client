import { CreatorSummary } from "../../entity/creator/summary";
import { User } from "../../entity/user";

export type UserSummary = Pick<
  User,
  "id" | "name" | "nickname" | "profileImage"
>;

export type UserMySummary = UserSummary & {
  ownedCreators: CreatorSummary[];
};
