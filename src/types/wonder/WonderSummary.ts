import { Wonder } from "../../entity/wonder";

export type MyWonderSummary = {
  liked: WonderSummaryTitleOnly | null;
  reserved: WonderSummaryReservation | null;
  ticketBook: WonderSummaryReservation | null;
};
export type WonderSummaryTitleOnly = Pick<Wonder, "id" | "title" | "thumbnail">;

export type WonderSummaryReservation = Pick<
  Wonder,
  "id" | "title" | "thumbnail" | "location"
> & {
  reservedTime: Wonder["schedule"][number];
};
