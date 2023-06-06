import { User } from "../../entity/user/user";
import { find, propEq } from "ramda";

const userDB: User[] = [
  {
    platformType: "NAVER",
    id: "test",
    name: "테스트",
    nickname: "테스트",
    phoneNumber: "01012345678",
    email: "test@wonderer.kr",
    profileImage: {
      src: "",
      altText: "",
    },
    dateInformation: {
      createdAt: new Date("2023-06-05"),
      lastModifiedAt: new Date("2023-06-05"),
    },
  },
];

export const findSampleUser = () => Promise.resolve(userDB[0]);

export const findMockUserInDB = async (id: string) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = find(propEq(id, "id"))(userDB);
      if (user) {
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    }, 100);
  });
