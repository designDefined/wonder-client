import { Creator } from "../creator/creator";
import { DateInformation } from "../utility/utility";

export type WonderId = number | null;
export type WonderTag = string;
export type WonderThumbnail = string;
export type WonderSummary = string;
export type WonderContent = string;
export type WonderSchedule = string;
export type WonderLocation = string;
export type WonderReservationProcess = null;

export type Wonder = {
  id: WonderId;
  title: string;
  tags: WonderTag[];
  creator: Creator;
  thumbnail: WonderThumbnail;
  summary: WonderSummary;
  content: WonderContent;
  schedule: WonderSchedule;
  location: WonderLocation;
  reservationProcess: WonderReservationProcess;
  dateInformation: DateInformation;
};
