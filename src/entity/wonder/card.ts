import { Wonder } from "./wonder";

export type WonderCard = Pick<Wonder, "id" | "title" | "creator" | "thumbnail">;
