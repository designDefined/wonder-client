import { Wonder } from "../../entity/wonder/wonder";

export type NewWonder = Pick<
  Wonder,
  | "title"
  | "summary"
  | "content"
  | "schedule"
  | "location"
  | "reservationProcess"
> & {
  tags: string[];
  thumbnail: Wonder["thumbnail"] | null;
};
