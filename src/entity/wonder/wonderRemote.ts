import { GenreTag } from "./tag";
import { Wonder } from "./wonder";

export type WonderRemote = Omit<Wonder, "tag" | "schedule"> & {
  schedule: string[];
  genre: GenreTag;
};
