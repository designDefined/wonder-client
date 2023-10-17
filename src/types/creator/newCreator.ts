import { Creator } from "../../entity/creator";

export type NewCreator = Pick<Creator, "name" | "summary" | "instagram">;
