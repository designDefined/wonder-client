import { Creator } from "../../entity/creator/creator";

export type CreatorDisplay = Pick<Creator, "id" | "name" | "profileImage">;
