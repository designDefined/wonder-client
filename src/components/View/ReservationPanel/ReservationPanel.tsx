import { useMemo, useState } from "react";
import styles from "./ReservationPanel.module.scss";
import useEnhancedState from "../../../libs/ReactAssistant/useEnhancedState";
import { NewReservation } from "../../../types/reservation/newReservation";
import { WonderDetail } from "../../../types/wonder/wonderDetail";
import classNames from "classnames/bind";
import Calendar from "../../common/Calendar/Calendar";
import { getMonthlyCalendar } from "calend-arr";
import Button from "../../common/Button/Button";
import { closeTray, requestTrayResize } from "../../../libs/Tray/useTray";
import { set } from "ramda";
import { authedApi } from "../../../api";
import { navigate } from "../../../libs/Codex";

const makeFirstCharSmall = (str: string) => str[0].toLowerCase() + str.slice(1);

const cx = classNames.bind(styles);

export default function ReservationPanel({
  wonder,
  userId,
}: {
  wonder: WonderDetail;
  userId: number | false;
}) {
  const [stage, setStage] = useState<"select" | "confirm" | "reserve">(
    "select",
  );
  const [selectedDate, setSelectedDate] = useState<
    NewReservation["time"] | null
  >(null);
  const [currentReservation, setCurrentReservation] =
    useEnhancedState<NewReservation>({
      wonderId: wonder.id,
      userId: userId ? userId : -1,
      time: wonder.schedule[0],
      data: wonder.reservationProcess
        ? Object.entries(wonder.reservationProcess)
            .filter(([key, bool]) => bool)
            .map(
              ([key]) =>
                makeFirstCharSmall(
                  key.slice(7),
                ) as NewReservation["data"][number],
            )
        : [],
    });
  const [year, month] = wonder.schedule[0].date;
  const calendar = useMemo(
    () => getMonthlyCalendar(year, month, { weekBeginsWith: "mon" }),
    [year, month],
  );

  if (!userId) {
    return <div />;
  }

  return (
    <div className={styles.ReservationPanel}>
      {stage === "select" && (
        <>
          <div className={cx("panel")}>
            <Calendar
              data={calendar}
              hasLabel={true}
              hasYearMonth={[year, month]}
              weekBeginsWith={1}
              onClick={(day) => {
                if (
                  wonder.schedule.map(({ date }) => date[2]).includes(day.date)
                ) {
                  setSelectedDate({ date: [year, month, day.date], time: [] });
                }
              }}
              dayClassName={(day) => {
                if (selectedDate?.date[2] === day.date) return cx("selected");

                if (
                  wonder.schedule.map(({ date }) => date[2]).includes(day.date)
                )
                  return cx("selectable");
                return cx("notSelectable");
              }}
            />
          </div>
          <Button
            label="날짜 선택 완료"
            attribute={{ theme: "default", size: "big" }}
            onClick={() => {
              console.log(selectedDate);
              if (selectedDate !== null) {
                requestTrayResize();
                setStage("confirm");
              }
            }}
          />
        </>
      )}
      {stage === "confirm" && (
        <div className={cx("wrapper")}>
          <div className={cx("alert")}>
            예약 내역을 다시 한 번 확인해주세요.
          </div>
          <div className={cx("info")}>
            <div className={cx("title")}>{wonder.title}</div>
            <div className={cx("location")}>{wonder.location.name}</div>
            <div className={cx("schedule")}>
              {selectedDate?.date.join(". ")}
            </div>
          </div>
          <div className={cx("notice")}>
            예약 시 필요한 이름, 전화번호, 이메일 정보는 이벤트 종료 후 안전하게
            파기됩니다. 정보 제공에 동의하시면 확인을 눌러주세요.
          </div>
          <div className={cx("buttons")}>
            <Button
              label="뒤로 가기"
              attribute={{ size: "big", theme: "white" }}
              onClick={() => {
                setStage("select");
                requestTrayResize();
              }}
            />
            <Button
              label="확인"
              attribute={{ size: "big", theme: "default" }}
              onClick={() => {
                if (!selectedDate) return;
                authedApi
                  .post(`/wonder/${wonder.id}/reservation`, {
                    ...currentReservation,
                    time: selectedDate,
                  })
                  .then((res) => {
                    const parsed = res as { isSuccess: boolean };
                    if (parsed.isSuccess) {
                      setStage("reserve");
                      requestTrayResize();
                    }
                  })
                  .catch((e) => {
                    console.error(e);
                  });
              }}
            />
          </div>
        </div>
      )}
      {stage === "reserve" && (
        <div className={cx("wrapper")}>
          <div className={cx("alert")}>예약이 완료되었습니다.</div>
          <div className={cx("info")}>
            <div className={cx("title")}>{wonder.title}</div>
            <div className={cx("location")}>{wonder.location.name}</div>
            <div className={cx("schedule")}>
              {selectedDate?.date.join(". ")}
            </div>
            <div className={cx("buttons")}>
              <Button
                label="이벤트 페이지로 가기"
                attribute={{ size: "big", theme: "white" }}
                onClick={() => {
                  closeTray();
                }}
              />
              <Button
                label="확인"
                attribute={{ size: "big", theme: "default" }}
                onClick={() => {
                  navigate("/me", "slideNext");
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
