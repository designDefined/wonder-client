import styles from "./Period.module.scss";
import { Wonder } from "../../../entity/wonder/wonder";
import { maybe, Maybe } from "../../../libs/Admon/maybe";
import { useMemo } from "react";
import { map, pipe, sort } from "ramda";

const sortDate = (a: [number, number, number], b: [number, number, number]) => {
  const [aYear, aMonth, aDay] = a;
  const [bYear, bMonth, bDay] = b;
  if (aYear > bYear) return 1;
  if (aYear < bYear) return -1;
  if (aMonth > bMonth) return 1;
  if (aMonth < bMonth) return -1;
  if (aDay > bDay) return 1;
  if (aDay < bDay) return -1;
  return 0;
};

export default function Period({
  schedule,
}: {
  schedule: Maybe<Wonder["schedule"]>;
}) {
  const [dateStart, dateEnd] = useMemo(
    () =>
      maybe.isNothing(schedule)
        ? ""
        : pipe(
            map(
              (schedule: { date: [number, number, number] }) => schedule.date,
            ),
            sort(sortDate),
            map(([y, m, d]) => `${y}. ${m}. ${d}`),
            (dates) => [dates[0], dates[dates.length - 1]],
          )(maybe.read(schedule)),
    [schedule],
  );

  return (
    <div className={styles.Period}>
      <>
        {dateStart} - {dateEnd}
      </>
    </div>
  );
}
