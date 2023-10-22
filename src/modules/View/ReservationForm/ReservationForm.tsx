import styles from "./ReservationForm.module.scss";
import { useEffect, useMemo, useState } from "react";
import classNames from "classnames/bind";
import { closeTray, requestTrayResize } from "../../../libs/Tray/useTray";
import { navigate } from "../../../libs/Codex";
import Calendar from "../../../components/Calendar/Calendar";
import { WonderDetail } from "../../../types/wonder/wonderDetail";
import Button from "../../../components/Button/Button";
import { parseDateToPeriodString } from "../../../functions/parse/parseDate";
import { useMutation } from "@tanstack/react-query";
import { postNewReservation } from "../../../api/reservation";
import { parseScheduleToPeriodString } from "../../../functions/parse/parseSchedule";

const translateDayToKorean = (day: number): string => {
  switch (day) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
    default:
      return "";
  }
};

const cx = classNames.bind(styles);

type ReservationFromProps = {
  id: WonderDetail["id"];
  title: WonderDetail["title"];
  location: WonderDetail["location"];

  schedule: WonderDetail["schedule"];
  reservationProcess: WonderDetail["reservationProcess"];
};

export default function ReservationForm({
  id,
  title,
  location,
  schedule,
  reservationProcess,
}: ReservationFromProps) {
  const [stage, setStage] = useState<"select" | "confirm" | "reserve">(
    "select",
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const parsedSchedule = useMemo(
    () => schedule.map((schedule) => new Date(schedule)),
    [schedule],
  );
  const [year, month] = useMemo(
    () => [parsedSchedule[0].getFullYear(), parsedSchedule[0].getMonth() + 1],

    [],
  );

  useEffect(() => {
    console.log(parsedSchedule.length);
  }, [parsedSchedule]);

  const { mutate } = useMutation({
    ...postNewReservation(id),
    onSuccess: () => {
      setStage("reserve");
      requestTrayResize();
    },
  });

  return (
    <div className={styles.ReservationPanel}>
      {stage === "select" && (
        <>
          <div className={cx("panel")}>
            <Calendar
              year={year}
              month={month}
              hasLabel={true}
              weekBeginsWith="mon"
              onClick={(date) => {
                const parsedIndex = parsedSchedule.findIndex(
                  (schedule) =>
                    schedule.getFullYear() === date.getFullYear() &&
                    schedule.getMonth() === date.getMonth() &&
                    schedule.getDate() === date.getDate(),
                );
                if (parsedIndex === -1) return;
                setSelectedDate(parsedSchedule[parsedIndex]);
              }}
              dayClassName={(date) => {
                if (
                  selectedDate &&
                  selectedDate.getFullYear() === date.getFullYear() &&
                  selectedDate.getMonth() === date.getMonth() &&
                  selectedDate.getDate() === date.getDate()
                )
                  return cx("selected");
                if (
                  parsedSchedule.findIndex(
                    (schedule) =>
                      schedule.getFullYear() === date.getFullYear() &&
                      schedule.getMonth() === date.getMonth() &&
                      schedule.getDate() === date.getDate(),
                  ) !== -1
                )
                  return cx("selectable");
                return cx("notSelectable");
              }}
            />
          </div>
          <div className={cx("times")}>
            {selectedDate &&
              parsedSchedule
                .filter(
                  (date) =>
                    date.getFullYear() === selectedDate.getFullYear() &&
                    date.getMonth() === selectedDate.getMonth() &&
                    date.getDate() === selectedDate.getDate(),
                )
                .map((date) => (
                  <div
                    className={cx("time", {
                      selected:
                        date.getHours() === selectedDate.getHours() &&
                        date.getMinutes() === selectedDate.getMinutes(),
                    })}
                    key={date.getTime()}
                    onClick={() => {
                      setSelectedDate(date);
                    }}
                  >
                    {date.getHours() >= 12 ? "오후" : "오전"}{" "}
                    {parseDateToPeriodString(date, "h:mm")}
                  </div>
                ))}
          </div>
          <Button
            isMainColored
            isFullWidth
            onClick={() => {
              if (selectedDate !== null) {
                requestTrayResize();
                setStage("confirm");
              }
            }}
          >
            날짜 선택 완료
          </Button>
        </>
      )}
      {stage === "confirm" && (
        <div className={cx("wrapper")}>
          <div className={cx("alert")}>
            예약 내역을 다시 한 번 확인해주세요.
          </div>
          <div className={cx("info")}>
            <div className={cx("title")}>{title}</div>
            <div className={cx("location")}>{location.name}</div>
            <div className={cx("schedule")}>
              {selectedDate &&
                ` ${parseDateToPeriodString(
                  selectedDate,
                  "MM.DD",
                )} (${translateDayToKorean(selectedDate.getDay())})   ${
                  selectedDate.getHours() >= 12 ? "오후" : "오전"
                } ${parseDateToPeriodString(selectedDate, "h:mm")}`}
            </div>
          </div>
          <div className={cx("notice")}>
            예약 시 필요한 이름, 전화번호, 이메일 정보는 이벤트 종료 후 안전하게
            파기됩니다. 정보 제공에 동의하시면 확인을 눌러주세요.
          </div>
          <div className={cx("buttons")}>
            <Button
              isFullWidth
              isMainColored={false}
              onClick={() => {
                setStage("select");
                requestTrayResize();
              }}
            >
              뒤로 가기
            </Button>
            <Button
              isFullWidth
              isMainColored
              onClick={() => {
                if (!selectedDate) return;
                mutate({
                  time: selectedDate.toDateString(),
                  data: {
                    phoneNumber: !!reservationProcess?.phone,
                    email: !!reservationProcess?.email,
                  },
                });
              }}
            >
              확인
            </Button>
          </div>
        </div>
      )}
      {stage === "reserve" && (
        <div className={cx("wrapper")}>
          <div className={cx("alert")}>예약이 완료되었습니다.</div>
          <div className={cx("info")}>
            <div className={cx("title")}>{title}</div>
            <div className={cx("location")}>{location.name}</div>
            <div className={cx("schedule")}>
              {selectedDate &&
                `${parseDateToPeriodString(
                  selectedDate,
                  "MM.DD",
                )} (${translateDayToKorean(selectedDate.getDay())}) ${
                  selectedDate.getHours() > 12 ? "오후" : "오전"
                } ${parseDateToPeriodString(selectedDate, "h:mm")}`}
            </div>
            <div className={cx("buttons")}>
              <Button
                isFullWidth
                isMainColored={false}
                onClick={() => {
                  closeTray();
                }}
              >
                이벤트 페이지로 가기
              </Button>
              <Button
                isFullWidth
                isMainColored
                onClick={() => {
                  navigate("/me", "slideNext");
                }}
              >
                확인
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
