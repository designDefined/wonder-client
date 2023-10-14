import { User } from "./user";

export type UserProfile = Pick<User, "id" | "nickname" | "profileImage">;
