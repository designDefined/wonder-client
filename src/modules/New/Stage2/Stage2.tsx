import classNames from "classnames/bind";
import dayjs from "dayjs";
import { useState } from "react";
import Calendar from "../../../components/Calendar/Calendar";
import Title from "../../../components/Title/Title";
import { openTray } from "../../../libs/Tray/useTray";

import { NewWonderInput } from "../../../pages/new/NewWonder/NewWonderPage";
import LocationInput from "../LocationInput/LocationInput";
import styles from "./Stage2.module.scss";
const cx = classNames.bind(styles);

const times: { h: number; m: number }[] = [];
for (let h = 9; h < 24; h++) {
  times.push({ h, m: 0 });
  times.push({ h, m: 30 });
}

const deleteDuplicatedDate = (dates: Date[]) => {
  const result = dates.filter((date, index) => {
    const parsedIndex = dates.findIndex((value) => sameDate(value, date));
    return parsedIndex === index;
  });
  return result;
};

const sameDate = (date1: Date, date2: Date) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

type Data = Pick<NewWonderInput, "location" | "schedule">;

export default function Stage2({
  data,
  setter,
}: {
  data: Data;
  setter: (data: Partial<Data>) => void;
}) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  return (
    <div className={cx("Stage2")}>
      <Title.Arrow
        title="이벤트 장소"
        onClick={() =>
          openTray(() => (
            <LocationInput
              data={data.location}
              setter={(partial) => setter({ ...data, ...partial })}
            />
          ))
        }
      />
      <div>
        <div className={cx("name")}>이벤트 일정</div>
        <Calendar
          className={cx("calendar")}
          year={year}
          month={month}
          hasLabel={true}
          weekBeginsWith="mon"
          onClick={(date) => {
            const parsedIndex = data.schedule.findIndex((schedule) =>
              sameDate(schedule, date),
            );
            if (parsedIndex < 0) {
              setter({
                schedule: [...data.schedule, date].sort(
                  (a, b) => a.getTime() - b.getTime(),
                ),
              });
            } else {
              setter({
                schedule: [
                  ...data.schedule.slice(0, parsedIndex),
                  ...data.schedule.slice(parsedIndex + 1),
                ],
              });
            }
          }}
          dayClassName={(date) => {
            return data.schedule.findIndex((schedule) =>
              sameDate(schedule, date),
            ) >= 0
              ? cx("selected")
              : cx("unselected");
          }}
        />
      </div>
      {deleteDuplicatedDate(data.schedule).map((date) => (
        <div key={date.getTime()}>
          <div className={cx("label")}>
            {dayjs(date).format("YYYY. MM. DD. ") + `(${date.getDay()})`}
          </div>
          <div className={cx("timeSlider")}>
            {times.map(({ h, m }) => (
              <div
                key={`h${h}m${m}`}
                className={cx("timeChip", {
                  selected:
                    data.schedule.findIndex(
                      (schedule) =>
                        sameDate(schedule, date) &&
                        schedule.getHours() === h &&
                        schedule.getMinutes() === m,
                    ) >= 0,
                })}
                onClick={() => {
                  const index = data.schedule.findIndex(
                    (schedule) =>
                      sameDate(schedule, date) &&
                      schedule.getHours() === h &&
                      schedule.getMinutes() === m,
                  );
                  if (index < 0) {
                    setter({
                      schedule: [
                        ...data.schedule,
                        new Date(
                          date.getFullYear(),
                          date.getMonth(),
                          date.getDate(),
                          h,
                          m,
                        ),
                      ].sort((a, b) => a.getTime() - b.getTime()),
                    });
                  } else {
                    setter({
                      schedule: [
                        ...data.schedule.slice(0, index),
                        ...data.schedule.slice(index + 1),
                      ],
                    });
                  }
                }}
              >
                {h < 12 ? "오전" : "오후"} {h % 12 || 12}:{m > 0 ? "30" : "00"}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
