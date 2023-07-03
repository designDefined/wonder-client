import { Creator, CreatorData } from "../creator/creator";
import { Reservation } from "../reservation/reservation";
import { User } from "../user/user";
import { DateInformation, StoredImage } from "../utility/utility";

export type WonderTag = { isPrimary: boolean; value: string };
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
  id: number;
  title: string;
  tags: WonderTag[];
  creator: Creator;
  thumbnail: StoredImage;
  summary: string;
  content: WonderContent;
  schedule: WonderSchedule[];
  location: WonderLocation;
  reservationProcess: WonderReservationProcess;
  dateInformation: DateInformation;
  likedUsers: User[];
  reservations: Reservation[];
};
