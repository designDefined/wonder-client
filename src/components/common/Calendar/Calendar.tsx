import styles from "./Calendar.module.scss";
import classNames from "classnames/bind";
import { Day, Month } from "calend-arr";

const cx = classNames.bind(styles);

type Props = {
  data: Month;
  hasLabel: boolean;
  hasYearMonth: false | [number, number];
  weekBeginsWith: number;
  onClick?: (day: Day) => void;
  className?: string;
  dayClassName?: (day: Day) => string;
};

const dayNumbers = [0, 1, 2, 3, 4, 5, 6];
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

export default function Calendar({
  data,
  hasLabel,
  hasYearMonth,
  weekBeginsWith = 0,
  onClick,
  dayClassName,
  className,
}: Props) {
  return (
    <div
      className={cx("Calendar", {
        [className ? className : "none"]: className,
      })}
    >
      {hasYearMonth && (
        <div className={cx("yearMonth")}>
          <div className={cx("month")}>
            {monthNumberToName(hasYearMonth[1])}
          </div>
          <div className={cx("year")}>{hasYearMonth[0]}</div>
        </div>
      )}
      {hasLabel && (
        <div className={cx("dayLabels")}>
          {dayNumbers
            .map((num) => (num + weekBeginsWith) % 7)
            .map((index) => labels[index])
            .map((label, i) => (
              <div key={i} className={cx("label", { [label]: true })}>
                {label}
              </div>
            ))}
        </div>
      )}
      {data.weeks.map((week, index) => (
        <div key={week.week} className={cx("week", { first: index === 0 })}>
          {week.days.map((day) => (
            <div
              key={day.date}
              onClick={() => onClick && onClick(day)}
              className={`${cx("day", { [day.dayOfWeek]: true })} ${"dayday"} ${
                dayClassName !== undefined ? dayClassName(day) : "notSelected"
              }`}
            >
              {day.date}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
