import dayjs from "dayjs";
import { GenreTag, StatusTag } from "./tag";
import { Wonder } from "./wonder";

export const translateWonderGenre = (genre: GenreTag): string => {
  if (genre === "play") return "연극";
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

export const parseWonderScheduleString = (
  schedule: Wonder["schedule"],
): string => {
  const startDate = schedule[0];
  const endDate = schedule[schedule.length - 1];

  if (startDate === endDate) {
    return dayjs(startDate).format("MM.DD");
  }

  return `${dayjs(startDate).format("MM.DD")}-${dayjs(endDate).format(
    "MM.DD",
  )}`;
};
