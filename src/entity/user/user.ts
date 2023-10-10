import { Creator } from "../creator/creator";
import { Reservation } from "../reservation/reservation";
import { DateInformation, StoredImage } from "../utility/utility";
import { Wonder } from "../wonder/wonder";

export type UserPlatformType = "NAVER" | "KAKAO" | "GOOGLE" | "TEST" | "ADMIN";

export type User = {
  id: number;
  platformType: UserPlatformType;
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
