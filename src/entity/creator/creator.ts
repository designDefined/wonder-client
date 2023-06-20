import { User } from "../user/user";
import { DateInformation, StoredImage } from "../utility/utility";
import { Wonder } from "../wonder/wonder";

export type Creator = {
  id: number;
  owner: User;
  name: string;
  summary: string;
  profileImage: StoredImage;
  dateInformation: DateInformation;
  createdWonder: Wonder[];
  instagram?: string;
};

export interface CreatorData extends Omit<Creator, "owner" | "createdWonder"> {
  owner: User["id"];
  createdWonder: Wonder["id"][];
}
