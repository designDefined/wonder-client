import { User } from "./user";

export type UserMyInfo = Pick<
  User,
  "id" | "name" | "nickname" | "email" | "profileImage" | "ownedCreators"
>;
