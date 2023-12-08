import classNames from "classnames/bind";
import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import Calendar from "../../../components/Calendar/Calendar";
import Input from "../../../components/Input/Input";
import BarButton from "../../../components/New/wonder/BarButton/BarButton";
import { NewWonderInput } from "../../../pages/new/NewWonder/NewWonderPage";
import styles from "./Stage3.module.scss";

const cx = classNames.bind(styles);

const times: { h: number; m: number }[] = [];
for (let h = 9; h < 24; h++) {
  times.push({ h, m: 0 });
  times.push({ h, m: 30 });
}

type Data = Pick<
  NewWonderInput,
  "isReservationRequired" | "reservationProcess"
>;
export default function Stage3({
  data,
  setter,
}: {
  data: Data;
  setter: (data: Partial<Data>) => void;
}) {
  const [startCalendar, setStartCalendar] = useState<{
    isOpen: boolean;
    year: number;
    month: number;
  }>({
    isOpen: false,
    year:
      data.reservationProcess?.startsAt.getFullYear() ??
      new Date().getFullYear(),
    month:
      data.reservationProcess?.startsAt.getMonth() ?? new Date().getMonth(),
  });
  const [endCalendar, setEndCalendar] = useState({
    isOpen: false,
    year:
      data.reservationProcess?.endsAt.getFullYear() ?? new Date().getFullYear(),
    month: data.reservationProcess?.endsAt.getMonth() ?? new Date().getMonth(),
  });

  const setReservationProcess = useCallback(
    (partial: Partial<Data["reservationProcess"]>) => {
      if (!data.reservationProcess) return;
      setter({
        reservationProcess: {
          ...data.reservationProcess,
          ...partial,
        },
      });
    },
    [data.reservationProcess],
  );

  useEffect(() => {
    if (data.isReservationRequired && !data.reservationProcess) {
      setter({
        reservationProcess: {
          startsAt: new Date(),
          endsAt: new Date(),
        },
      });
    }
  }, []);

  if (!data.reservationProcess) return <></>;

  return (
    <div className={cx("Stage3")}>
      <div className={cx("time")}>
        <div className={cx("bar")}>
          <div className={cx("label")}>예약 시작 시간</div>
          <button
            className={cx("calendarButton")}
            onClick={() => setStartCalendar({ ...startCalendar, isOpen: true })}
          >
            {dayjs(data.reservationProcess.startsAt).format("YYYY. MM. DD.")}
          </button>
          {startCalendar.isOpen && (
            <Calendar
              className={cx("calendar")}
              year={startCalendar.year}
              month={startCalendar.month + 1}
              onClick={(date) => {
                setReservationProcess({
                  startsAt: date,
                });
                setStartCalendar({
                  ...startCalendar,
                  isOpen: false,
                });
              }}
              hasLabel={true}
              weekBeginsWith="sun"
            />
          )}
          {/* <select></select> */}
        </div>
        <div className={cx("bar")}>
          <div className={cx("label")}>예약 종료 시간</div>
          <button
            className={cx("calendarButton")}
            onClick={() => setEndCalendar({ ...endCalendar, isOpen: true })}
          >
            {dayjs(data.reservationProcess.endsAt).format("YYYY. MM. DD.")}
          </button>
          {endCalendar.isOpen && (
            <Calendar
              className={cx("calendar")}
              year={endCalendar.year}
              month={endCalendar.month + 1}
              onClick={(date) => {
                if (
                  date.getTime() <
                  (data.reservationProcess?.startsAt.getTime() ?? 0)
                ) {
                  alert("시작 시간 이후로 설정해주세요.");
                  return;
                }
                setReservationProcess({
                  endsAt: date,
                });
                setEndCalendar({
                  ...endCalendar,
                  isOpen: false,
                });
              }}
              hasLabel={true}
              weekBeginsWith="sun"
            />
          )}
          {/* <select></select> */}
        </div>
      </div>
      <div className={cx("divider")} />
      <Input.Text
        title="회차 별 예약 가능 인원"
        value={`${
          data.reservationProcess.amount && data.reservationProcess.amount > 0
            ? data.reservationProcess.amount
            : ""
        }`}
        onChange={(e) => {
          if (Number.isNaN(Number(e.target.value))) return;
          setReservationProcess({
            amount: Number(e.target.value),
          });
        }}
        onValidateError={(value) =>
          Number.isNaN(Number(value)) ? "숫자만 입력해주세요." : null
        }
      />
      <div className={cx("divider")} />
      <div className={cx("information")}>
        <div className={cx("label")}>예약 정보 옵션</div>
        <div>이름은 기본 정보로 받을 수 있어요!</div>
        <BarButton
          title="전화번호를 받을게요"
          interaction={{
            type: "toggle",
            onToggle: (bool) => {
              setReservationProcess({
                phone: bool,
              });
            },
            value: data.reservationProcess.phone ?? false,
          }}
          isBold={false}
        />
        <BarButton
          title="메일 주소를 받을게요"
          interaction={{
            type: "toggle",
            onToggle: (bool) => {
              setReservationProcess({
                email: bool,
              });
            },
            value: data.reservationProcess.email ?? false,
          }}
          isBold={false}
        />
      </div>
    </div>
  );
}
