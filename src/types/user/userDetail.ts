import { User } from "../../entity/user";

export type UserWithEmail = Pick<
  User,
  "id" | "nickname" | "email" | "profileImage"
>;
