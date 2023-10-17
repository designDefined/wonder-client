import { User } from "../../entity/user";

export type UserLoggedIn = Pick<
  User,
  "id" | "name" | "nickname" | "profileImage"
> & {
  token: string;
  howManyCreatorsOwned: number;
  needRegister: false;
};

export type UserNeedRegister = Pick<User, "email"> & { needRegister: true };

export type UserRegisterForm = Pick<User, "email" | "name" | "phoneNumber">;
