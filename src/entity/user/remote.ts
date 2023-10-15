import { WonderRemote } from "../wonder/wonderRemote";
import { User } from "./user";

export type UserRemote = Omit<User, "likedWonders"> & {
  likedWonders: WonderRemote[];
};
