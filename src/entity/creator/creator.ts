import { User } from "../user/user";
import { DateInformation } from "../utility/utility";
import { Wonder } from "../wonder/wonder";

export type Creator = {
  id: number;
  owner: User;
  name: string;
  profileImage: string;
  dateInformation: DateInformation;
  createdWonder: Wonder[];
};
