export type UserPlatformType = "ADMIN" | "NAVER";
export type UserId = string;
export type UserName = string;
export type UserNickname = string | undefined | null;
export type UserPhoneNumber = string | undefined | null;
export type UserEmail = string;
export type UserDate = Date;

export type User = {
  platformType: UserPlatformType;
  id: UserId;
  name?: UserName;
  nickname?: UserNickname;
  phoneNumber?: UserPhoneNumber;
  email: UserEmail;
  created_at: UserDate;
  last_modified_at: UserDate;
};
