import { Creator } from "../creator";
import { GenreTag, StatusTag } from "./tag";
import { Reservation } from "../reservation";
import { User } from "../user";
import { DateInformation, StoredImage } from "../utility/utility";

export type Wonder = {
  id: number;
  title: string;
  tag: { status: StatusTag; genre: GenreTag };
  creator: Creator;
  thumbnail: StoredImage;
  summary: string;
  content: string;
  schedule: Date[]; // sorted
  location: {
    coordinates: { x: number; y: number };
    name: string;
    description: string;
  };
  reservationProcess: {
    startsAt: Date;
    endsAt: Date;
    amount?: number;
    phone?: boolean;
    email?: boolean;
  } | null;
  dateInformation: DateInformation;
  likedUsers: User[];
  reservations: Reservation[];
};
