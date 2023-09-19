import { Creator } from "../creator/creator";
import { GenreTag, StatusTag } from "./tag";
import { Reservation } from "../reservation/reservation";
import { User } from "../user/user";
import { DateInformation, StoredImage } from "../utility/utility";

export type Wonder = {
  id: number;
  title: string;
  tag: { status: StatusTag; genre: GenreTag };
  creator: Creator;
  thumbnail: StoredImage;
  summary: string;
  content: string;
  schedule: string[];
  location: {
    coordinates: { x: number; y: number };
    name: string;
    description: string;
  };
  reservationProcess: null;
  dateInformation: DateInformation;
  liked: boolean;
  likedUsers: User[];
  reservations: Reservation[];
};
