import { CreatorData } from "../creator/creator";
import { DateInformation, StoredImage } from "../utility/utility";

export type WonderId = number | null;
export type WonderTag = { isPrimary: boolean; value: string };
export type WonderThumbnail = StoredImage | null;
export type WonderSummary = string;
export type WonderContent = string;
export type WonderSchedule = {
  date: [number, number, number];
  time: [number, number][];
};
export type WonderLocation = string;
export type WonderReservationProcess = null;

export type Wonder = {
  id: WonderId;
  title: string;
  tags: WonderTag[];
  creator: CreatorData;
  thumbnail: WonderThumbnail;
  summary: WonderSummary;
  content: WonderContent;
  schedule: WonderSchedule[];
  location: WonderLocation;
  reservationProcess: WonderReservationProcess;
  dateInformation: DateInformation;
};
