import { DateInformation, StoredImage } from "../utility/utility";

export type UserPlatformType = "ADMIN" | "NAVER";
export type UserId = string;
export type UserEmail = string;

export type User = {
  platformType: UserPlatformType;
  id: UserId;
  name: string;
  nickname: string;
  phoneNumber: string | null;
  email: UserEmail;
  profileImage: StoredImage;
  dateInformation: DateInformation;
};
