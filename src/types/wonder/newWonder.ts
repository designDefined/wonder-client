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
  thumbnail: NewWonderImage | null;
};

export type NewWonderImage = { file: File; url: string; fileName: string };
