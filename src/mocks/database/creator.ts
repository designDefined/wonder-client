import { CreatorData } from "../../entity/creator/creator";
import { findByProperty, FindByProperty } from "./DBManipulator";

export const creatorDB: CreatorData[] = [
  {
    id: 0,
    owner: "isc",
    name: "정보문화학",
    summary: "연합전공 정보문화학 공식 계정입니다.",
    profileImage: {
      src: "/src/assets/sample/creator_thumbnail_sample_1.png",
      altText: "정보문화학 아이콘",
    },
    dateInformation: {
      createdAt: new Date("2022-11-01"),
      lastModifiedAt: new Date("2022-11-01"),
    },
    createdWonder: [0],
  },
];

export const findMockCreatorInDB: FindByProperty<CreatorData, "id"> =
  findByProperty("id")(creatorDB);
