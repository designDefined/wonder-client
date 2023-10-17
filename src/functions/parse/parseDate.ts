import dayjs from "dayjs";
import { Wonder } from "../../entity/wonder";

export const parseDateToPeriodString = (
  date: Wonder["schedule"][number],
  format: string,
): string => {
  return `${dayjs(date).format(format)}`;
};
