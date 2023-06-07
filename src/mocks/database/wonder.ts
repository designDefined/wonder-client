import { Wonder } from "../../entity/wonder/wonder";
import { creatorDB } from "./creator";
import { delayedReturn, findByProperty, FindByProperty } from "./DBManipulator";
import { WonderCardDisplay } from "../../types/wonder/wonderCardDisplay";
import {
  findIndex,
  map,
  pick,
  pipe,
  propEq,
  range,
  reverse,
  slice,
} from "ramda";

const thumbnailSample = ["/src/assets/sample/poster_sample.png"];

const createSampleWonder = (id: number): Wonder => ({
  id,
  title: "new_ISC = ITCT(“20th”)",
  tags: [
    { isPrimary: true, value: "과제전" },
    { isPrimary: false, value: "정보문화학" },
    { isPrimary: false, value: "20주년" },
  ],
  creator: creatorDB[0],
  thumbnail: { src: thumbnailSample[0], altText: "정보문화 과제전 포스터" },
  summary: "2022년 2학기 연합전공 정보문화학 과제전",
  content:
    "우리의 그들의 몸이 때에, 평화스러운 예가 얼음과 든 것이다. 사람은 곳으로 사는가 얼음이 미인을 심장은 낙원을 있는 교향악이다. 무엇이 가치를 가지에 못할 얼마나 심장의 영락과 되는 이성은 칼이다. 가는 가지에 청춘은 없으면, 관현악이며, 인간에 오아이스도 피다. 대중을 뜨거운지라, 날카로우나 뿐이다. 타오르고 설산에서 하는 심장은 같은 청춘에서만 긴지라 힘있다. 피부가 얼음과 갑 놀이 하여도 위하여 끝까지 공자는 황금시대다. 유소년에게서 아니더면, 것은 목숨이 같이 내려온 가는 우리의 것이다. 곧 이상이 싸인 돋고, 청춘은 대중을 것이다. 같은 원질이 열락의 만천하의 주는 밝은 있는가? 때에, 예수는 그들에게 것이다.\n",
  schedule: [
    {
      date: new Date("2022-12-15"),
      time: [
        [16, 0],
        [19, 0],
      ],
    },
    {
      date: new Date("2022-12-16"),
      time: [
        [16, 0],
        [19, 0],
      ],
    },
    {
      date: new Date("2022-12-17"),
      time: [
        [16, 0],
        [19, 0],
      ],
    },
  ],
  location: "64동 커뮤니케이션센터",
  reservationProcess: null,
  dateInformation: {
    createdAt: new Date("2022-12-01"),
    lastModifiedAt: new Date("2022-12-05"),
  },
});

const wonderDB: Wonder[] = map(createSampleWonder)(range(0, 20));

export const findMockWonderInDB: FindByProperty<Wonder, "id"> =
  findByProperty("id")(wonderDB);

export const getRecentWonderCardDisplay: (
  amount: number,
  lastItemId?: Wonder["id"],
) => Promise<WonderCardDisplay[]> = (amount, lastItemId) =>
  pipe(
    findIndex(propEq(lastItemId, "id")),
    (index) => (index < 0 ? wonderDB.length : index),
    (endIndex) => slice(endIndex - amount, endIndex, wonderDB),
    map(pick(["id", "title", "tags", "thumbnail", "creator"])),
    map((wonder) => ({
      ...wonder,
      creator: pick(["id", "name", "profileImage"], wonder.creator),
    })),
    (arr) => reverse(arr),
    delayedReturn,
  )(wonderDB);
