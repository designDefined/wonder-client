import { Wonder } from "./wonder/wonder";
import { Creator } from "./creator/creator";
import { KeysOfUnion } from "ramda";

export const emptyWonder = (creator: Creator, date: Date): Wonder => ({
  id: null,
  title: "",
  tags: [],
  creator: creator,
  thumbnail: null,
  summary: "",
  content: "",
  schedule: "",
  location: "",
  reservationProcess: null,
  dateInformation: {
    createdAt: date,
    lastModifiedAt: date,
  },
});

export const keysOfWonder: KeysOfUnion<Wonder>[] = [
  "id",
  "title",
  "tags",
  "creator",
  "thumbnail",
  "summary",
  "content",
  "schedule",
  "location",
  "reservationProcess",
  "dateInformation",
];
