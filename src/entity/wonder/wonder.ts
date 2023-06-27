import { CreatorData } from "../creator/creator";
import { DateInformation, StoredImage } from "../utility/utility";

export type WonderId = number | null;
export type WonderTag = { isPrimary: boolean; value: string };
export type WonderThumbnail = StoredImage | null;
export type WonderContent = string;
export type WonderSchedule = {
  date: [number, number, number];
  time: [number, number][];
};
export type WonderLocation = { x: number; y: number; name: string };
export type WonderReservationProcess =
  | false
  | {
      requireName: boolean;
      requirePhoneNumber: boolean;
      requireEmail: boolean;
    };

export type Wonder = {
  id: WonderId;
  title: string;
  tags: WonderTag[];
  creator: CreatorData;
  thumbnail: WonderThumbnail;
  summary: string;
  content: WonderContent;
  schedule: WonderSchedule[];
  location: WonderLocation;
  reservationProcess: WonderReservationProcess;
  dateInformation: DateInformation;
};
