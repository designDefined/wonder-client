export type UserPlatformType = "ADMIN" | "NAVER";
export type UserId = number;
export type UserName = string;
export type UserNickname = string | null;
export type UserPhoneNumber = string | null;
export type UserEmail = string;
export type UserDate = Date;

export type User = {
  platformType: UserPlatformType;
  id: UserId;
  name: UserName;
  nickname: UserNickname;
  phoneNumber: UserPhoneNumber;
  email: UserEmail;
  created_at: UserDate;
  last_modified_at: UserDate;
};
