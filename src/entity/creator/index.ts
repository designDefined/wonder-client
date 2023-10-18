import { User } from "../user";
import { DateInformation, StoredImage } from "../utility/utility";
import { Wonder } from "../wonder";

export type Creator = {
  id: number;
  owner: User;
  name: string;
  summary: string;
  profileImage: StoredImage;
  dateInformation: DateInformation;
  createdWonder: Wonder[];
  subscribedUsers: User[];
  instagram?: string;
};