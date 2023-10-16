import { GenreTag } from "../../entity/wonder/tag";

const engToKr = (genre: GenreTag): string => {
  switch (genre) {
    case "exhibition":
      return "전시";
    case "hof":
      return "호프";
    case "festival":
      return "축제";
    case "play":
      return "연극 · 뮤지컬";
    case "lecture":
      return "강연";
    case "booth":
      return "부스";
    case "band":
      return "밴드공연";
    case "dance":
      return "댄스공연";
    case "etc":
      return "기타";
  }
};

const krToEng = (genre: string): GenreTag => {
  switch (genre) {
    case "전시":
      return "exhibition";
    case "호프":
      return "hof";
    case "축제":
      return "festival";
    case "연극 · 뮤지컬":
      return "play";
    case "강연":
      return "lecture";
    case "부스":
      return "booth";
    case "밴드공연":
      return "band";
    case "댄스공연":
      return "dance";
    default:
      return "etc";
  }
};

const translateGenre = {
  engToKr,
  krToEng,
};

export default translateGenre;
