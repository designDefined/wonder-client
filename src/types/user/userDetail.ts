import { User } from "../../entity/user/user";

export type UserWithEmail = Pick<
  User,
  "id" | "nickname" | "email" | "profileImage"
>;
