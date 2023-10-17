import { User } from ".";

export type UserSummary = Pick<User, "id" | "nickname" | "profileImage">;
