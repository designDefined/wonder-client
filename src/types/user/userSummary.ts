import { User } from "../../entity/user/user";

export type UserSummary = Pick<
  User,
  "id" | "name" | "nickname" | "profileImage"
>;
