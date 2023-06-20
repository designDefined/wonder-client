import { User } from "../../entity/user/user";
import { findByProperty, FindByProperty } from "./DBManipulator";

const userDB: User[] = [
  {
    platformType: "NAVER",
    id: "test",
    name: "테스트",
    nickname: "테스트",
    phoneNumber: "01012345678",
    email: "test@wonderer.kr",
    profileImage: {
      src: "/src/assets/sample/creator_thumbnail_sample_2.png",
      altText: "",
    },
    dateInformation: {
      createdAt: new Date("2023-06-05"),
      lastModifiedAt: new Date("2023-06-05"),
    },
  },
];

export const findSampleUser = () => Promise.resolve(userDB[0]);

export const findMockUserInDB: FindByProperty<User, "id"> =
  findByProperty("id")(userDB);
