import dayjs from "dayjs";
import { GenreTag, StatusTag } from "./tag";
import { Wonder } from "./wonder";
import { WonderRemote } from "./wonderRemote";

export const parseWonderRemote: (remote: WonderRemote) => Wonder = (remote) => {
  const { schedule, ...rest } = remote;
  return {
    ...rest,
    schedule: schedule.map((dateString) => dayjs(dateString).toDate()),
    tag: {
      genre: remote.genre,
      status: "reserveNow",
    },
  };
};

export const translateWonderGenre = (genre: GenreTag): string => {
  if (genre === "play") return "연극";
  if (genre === "exhibition") return "전시";
  if (genre === "concert") return "공연";
  if (genre === "musical") return "뮤지컬";
  if (genre === "sports") return "체육";
  if (genre === "etc") return "기타";
  return "잘못된 장르";
};

export const translateWonderStatus = (status: StatusTag): string => {
  if (status === "reserveSoon") return "예약 예정";
  if (status === "reserveNow") return "예약 중";
  if (status === "reserveFinished") return "예약 마감";
  if (status === "soon") return "진행 예정";
  if (status === "now") return "진행 중";
  if (status === "finished") return "종료";
  return "상태 오류";
};
