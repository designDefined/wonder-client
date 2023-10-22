import classNames from "classnames/bind";
import { useMemo } from "react";
import Button from "../../../components/Button/Button";
import { parseReservationProcessPeriod } from "../../../functions/parse/parseReservation";
import { parseScheduleToPeriodString } from "../../../functions/parse/parseSchedule";
import { openTray } from "../../../libs/Tray/useTray";
import { WonderDetail } from "../../../types/wonder/wonderDetail";
import ReservationForm from "../ReservationForm/ReservationForm";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

type TitleProps = Pick<
  WonderDetail,
  "id" | "title" | "summary" | "schedule" | "location" | "reservationProcess"
>;

function Title({
  id,
  title,
  summary,
  schedule,
  location,
  reservationProcess,
}: TitleProps) {
  const parsedPeriod = useMemo(
    () => parseReservationProcessPeriod(reservationProcess),
    [reservationProcess],
  );
  return (
    <div className={cx("Title")}>
      <h1 className={cx("titleText")}>{title}</h1>
      <h2 className={cx("subTitleText")}>{summary}</h2>
      <div className={cx("schedule")}>
        {parseScheduleToPeriodString(schedule, "YYYY. MM. DD", " - ")}
      </div>
      {reservationProcess && (
        <>
          <Button
            className={cx("reservation")}
            isFullWidth
            isMainColored
            onClick={() =>
              openTray(() => (
                <ReservationForm
                  id={id}
                  title={title}
                  schedule={schedule}
                  location={location}
                  reservationProcess={reservationProcess}
                />
              ))
            }
          >
            예약하기
          </Button>
          {parsedPeriod.status !== "finished" && (
            <div className={cx("reservationTimer", parsedPeriod.status)}>
              ⏰ {parsedPeriod.status === "reserveNow" ? "마감" : "시작"}까지{" "}
              <span className={cx("bold")}>
                {parsedPeriod.daysLeft}일 {parsedPeriod.hourLeft}시간
              </span>{" "}
              남았어요!
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Placeholder() {
  return (
    <div className={cx("Title")}>
      <h1 className={cx("titleText")}></h1>
      <h2 className={cx("subTitleText")}></h2>
      <div className={cx("schedule")}></div>
      <div className={cx("divider")} />
    </div>
  );
}

Title.Placeholder = Placeholder;

export default Title;
