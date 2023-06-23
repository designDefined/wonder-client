import { DateInformation, StoredImage } from "../utility/utility";

export type UserPlatformType = "ADMIN" | "NAVER";
export type UserEmail = string;

export type User = {
  platformType: UserPlatformType;
  id: string;
  _id: string;
  name: string;
  nickname: string;
  phoneNumber: string | null;
  email: UserEmail;
  profileImage: StoredImage;
  dateInformation: DateInformation;

  reservedWonders: [];
  likedWonders: [];
  ticketBook: [];
};
