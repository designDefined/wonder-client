import { Creator } from "../../entity/creator/creator";

export type CreatorDetail = Pick<
  Creator,
  "id" | "name" | "profileImage" | "summary" | "instagram"
> & {
  isMine: boolean;
};
