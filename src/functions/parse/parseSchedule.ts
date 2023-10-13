import dayjs from "dayjs";
import { Wonder } from "../../entity/wonder/wonder";

export const parseScheduleToPeriodString = (
  schedule: Wonder["schedule"],
  format: string,
  connector: string,
): string => {
  const startDate = schedule[0];
  const endDate = schedule[schedule.length - 1];

  if (startDate === endDate) {
    return dayjs(startDate).format(format);
  }

  return `${dayjs(startDate).format(format)}${connector}${dayjs(endDate).format(
    format,
  )}`;
};
