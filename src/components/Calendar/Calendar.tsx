import styles from "./Calendar.module.scss";
import classNames from "classnames/bind";
import { useMemo } from "react";

const cx = classNames.bind(styles);

type Props = {
  year: number;
  month: number;
  hasLabel: boolean;
  weekBeginsWith: "sun" | "mon";
  onClick?: (date: Date) => void;
  className?: string;
  dayClassName?: (date: Date) => string;
};

const dayNumbers = [0, 1, 2, 3, 4, 5, 6] as const;
const labels = ["S", "M", "T", "W", "T", "F", "S"];

const monthNumberToName = (month: number): string => {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid Month";
  }
};

const parseDayNumberToDay = (dayNumber: number): string => {
  switch (dayNumber) {
    case 0:
      return "sun";
    case 1:
      return "mon";
    case 2:
      return "tue";
    case 3:
      return "wed";
    case 4:
      return "thu";
    case 5:
      return "fri";
    case 6:
      return "sat";
    default:
      return "Invalid Day Number";
  }
};

const getDatesOfMonth = (year: number, month: number): Date[] => {
  const dates = [];
  const lastDate = new Date(year, month, 0).getDate();
  for (let i = 1; i <= lastDate; i++) {
    dates.push(new Date(year, month - 1, i));
  }
  return dates;
};

const groupDatesByWeeks = (
  dates: Date[],
  weekBeginsWith: (typeof dayNumbers)[number],
): { weekNumber: number; days: Date[] }[] => {
  const weeks: { weekNumber: number; days: Date[] }[] = [
    { weekNumber: 1, days: [] },
  ];
  let weekNumber = 2;
  for (let i = 0; i < dates.length; i++) {
    const iDay = dates[0].getDay() + i;
    if (iDay >= weekBeginsWith && iDay % 7 === weekBeginsWith) {
      weeks.push({ weekNumber, days: [] });
      weekNumber++;
    }
    weeks[weeks.length - 1].days.push(dates[i]);
  }
  return weeks;
};

export default function Calendar({
  year,
  month,
  hasLabel,
  weekBeginsWith = "sun",
  onClick,
  dayClassName,
  className,
}: Props) {
  const weeks = useMemo(
    () =>
      groupDatesByWeeks(
        getDatesOfMonth(year, month),
        weekBeginsWith === "sun" ? 0 : 1,
      ),
    [year, month],
  );
  return (
    <div className={cx("Calendar", className)}>
      <div className={cx("yearMonth")}>
        <div className={cx("month")}>{monthNumberToName(month)}</div>
        <div className={cx("year")}>{year}</div>
      </div>
      {hasLabel && (
        <div className={cx("dayLabels")}>
          {dayNumbers
            .map((num) => (num + (weekBeginsWith === "sun" ? 0 : 1)) % 7)
            .map((index) => labels[index])
            .map((label, i) => (
              <div
                key={`dayLabel${i}`}
                className={cx("label", { [label]: true })}
              >
                {label}
              </div>
            ))}
        </div>
      )}
      {weeks.map((week, index) => (
        <div
          key={`week${week.weekNumber}`}
          className={cx("week", { first: index === 0 })}
        >
          {week.days.map((date) => (
            <div
              key={`date${date.getDate()}`}
              onClick={() => onClick && onClick(date)}
              className={cx(
                "day",
                parseDayNumberToDay(date.getDay()),
                dayClassName && dayClassName(date),
              )}
            >
              {date.getDate()}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
