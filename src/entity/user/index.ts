import { Creator } from "../creator";
import { Reservation } from "../reservation";
import { DateInformation, StoredImage } from "../utility/utility";
import { Wonder } from "../wonder";
import { PlatformType } from "./platform";

export type User = {
  id: number;
  platformType: PlatformType;
  socialId: string;
  name: string;
  nickname: string;
  phoneNumber: string;
  email: string;
  profileImage: StoredImage;
  dateInformation: DateInformation;
  likedWonders: Wonder[];
  reservedWonders: Reservation[];
  ticketBook: Reservation[];
  ownedCreators: Creator[];
};
