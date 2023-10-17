import { Creator } from ".";

export type CreatorSummary = Pick<
  Creator,
  "id" | "name" | "summary" | "profileImage" | "instagram"
>;
