import { CreatorData } from "../../entity/creator/creator";
import { findByProperty, FindByProperty } from "./DBManipulator";

export const creatorDB: CreatorData[] = [
  {
    id: 0,
    owner: "isc",
    name: "정보문화학",
    profileImage: { src: "", altText: "정보문화학 아이콘" },
    dateInformation: {
      createdAt: new Date("2022-11-01"),
      lastModifiedAt: new Date("2022-11-01"),
    },
    createdWonder: [0],
  },
];

export const findMockCreatorInDB: FindByProperty<CreatorData, "id"> =
  findByProperty("id")(creatorDB);
