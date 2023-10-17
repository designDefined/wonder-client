import { Creator } from ".";

export type CreatorDisplay = Pick<
  Creator,
  "id" | "name" | "summary" | "profileImage" | "instagram"
> & {
  createdWonder: null;
  subscribedUsers: null;
};
