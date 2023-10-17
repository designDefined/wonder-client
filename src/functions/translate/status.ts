import { StatusTag } from "../../entity/wonder/tag";

const engToKr = (status: StatusTag): string => {
  switch (status) {
    case "reserveSoon":
      return "예약 예정";
    case "reserveNow":
      return "예약 중";
    case "reserveFinished":
      return "예약 마감";
    case "soon":
      return "진행 예정";
    case "now":
      return "진행 중";
    case "finished":
      return "종료";
  }
};

const krToEng = (genre: string): StatusTag => {
  switch (genre) {
    case "예약 예정":
      return "reserveSoon";
    case "예약 중":
      return "reserveNow";
    case "예약 마감":
      return "reserveFinished";
    case "진행 예정":
      return "soon";
    case "진행 중":
      return "now";
    case "종료":
      return "finished";
    default:
      return "finished";
  }
};

const translateStatus = {
  engToKr,
  krToEng,
};

export default translateStatus;
