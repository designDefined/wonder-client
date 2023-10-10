import classNames from "classnames/bind";
import { NewWonder } from "../../../../../types/wonder/newWonder";
import styles from "./DatePanel.module.scss";
import { flatten } from "ramda";
import { useEffect } from "react";

const cx = classNames.bind(styles);

const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

const arrayIsEqual = (a: unknown[], b: unknown[]): boolean => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const flattenSchedule = (
  schedule: NewWonder["schedule"],
): [number, number, number, number, number, number][] =>
  schedule
    .map(({ date: [y, m, d], time }) =>
      time.map(
        ([h, min], i): [number, number, number, number, number, number] => [
          y,
          m,
          d,
          h,
          min,
          i,
        ],
      ),
    )
    .flat();

const onChangeSchedule =
  (schedule: NewWonder["schedule"]) =>
  (
    y: number,
    m: number,
    d: number,
    i: number,
    h: number,
  ): NewWonder["schedule"] =>
    schedule.map((data) =>
      arrayIsEqual(data.date, [y, m, d])
        ? {
            ...data,
            time: data.time.map((time, index) =>
              index === i ? [h, time[0]] : time,
            ),
          }
        : data,
    );

const onChangeSameSchedule =
  (schedule: NewWonder["schedule"]) =>
  (h: number, i: number): NewWonder["schedule"] =>
    schedule.map(({ date, time }) => ({
      date,
      time: time.map(([hour, min], index) =>
        index === i ? [h, 0] : [hour, min],
      ),
    }));

const addOneTime =
  (schedule: NewWonder["schedule"]) =>
  (y: number, m: number, d: number, i: number): NewWonder["schedule"] =>
    schedule.map((data) =>
      arrayIsEqual(data.date, [y, m, d])
        ? {
            ...data,
            time: [
              ...data.time.slice(0, i + 1),
              [12, 0],
              ...data.time.slice(i),
            ],
          }
        : data,
    );
const addSameTime =
  (schedule: NewWonder["schedule"]) =>
  (i: number): NewWonder["schedule"] =>
    schedule.map(({ date, time }) => ({
      date,
      time: [...time.slice(0, i + 1), [12, 0], ...time.slice(i)],
    }));

export default function SelectDifferentTime({
  includeTime,
  sameTime,
  schedule,
  setSchedule,
}: {
  includeTime: boolean;
  sameTime: boolean;
  schedule: NewWonder["schedule"];
  setSchedule: (schedule: NewWonder["schedule"]) => void;
}) {
  useEffect(() => {
    if (includeTime) {
      setSchedule(
        schedule.map(({ date, time }) =>
          time.length === 0 ? { date, time: [[12, 0]] } : { date, time },
        ),
      );
    } else {
      setSchedule(schedule.map(({ date }) => ({ date, time: [] })));
    }
  }, [includeTime]);

  useEffect(() => {
    if (sameTime) {
      if (schedule[0].time.length > 0) {
        setSchedule(
          schedule.map(({ date }) => ({
            date,
            time: schedule[0].time,
          })),
        );
      } else {
        setSchedule(
          schedule.map(({ date }) => ({
            date,
            time: [[12, 0]],
          })),
        );
      }
    }
  }, [sameTime]);

  return (
    <div>
      {!sameTime
        ? flattenSchedule(schedule).map(([y, m, d, h, min, i]) => (
            <div className={cx("timeItem")} key={`${y}${m}${d}${h}${min}`}>
              <div className={cx("label")}>{`${y}. ${m}. ${d}`}</div>
              <select
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "add") {
                    setSchedule(addOneTime(schedule)(y, m, d, i));
                  } else {
                    setSchedule(
                      onChangeSchedule(schedule)(y, m, d, i, Number(value)),
                    );
                  }
                }}
              >
                {hours.map((hour) => (
                  <option
                    selected={hour === h}
                    key={hour}
                    value={hour}
                  >{`${hour}:00`}</option>
                ))}
              </select>
            </div>
          ))
        : schedule[0].time.map(([h], i) => (
            <div className={cx("timeItem")} key={i}>
              <select
                key={h}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "add") {
                    setSchedule(addSameTime(schedule)(i));
                  } else {
                    setSchedule(
                      onChangeSameSchedule(schedule)(Number(value), i),
                    );
                  }
                }}
              >
                {hours.map((hour) => (
                  <option
                    selected={hour === h}
                    key={hour}
                    value={hour}
                  >{`${hour}:00`}</option>
                ))}
              </select>
            </div>
          ))}
    </div>
  );
}
