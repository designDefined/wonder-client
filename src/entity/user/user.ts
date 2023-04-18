export type UserId = number;
export type UserName = string;
export type UserNickname = string | null;
export type UserPhoneNumber = string;

export type User = {
  id: UserId;
  name: UserName;
  nickname: UserNickname;
  phoneNumber: UserPhoneNumber;
};
