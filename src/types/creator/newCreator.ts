import { Creator } from "../../entity/creator/creator";

export type NewCreator = Pick<Creator, "name" | "summary" | "instagram">;
