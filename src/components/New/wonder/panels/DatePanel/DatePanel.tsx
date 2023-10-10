import styles from "./DatePanel.module.scss";
import { useEffect, useMemo, useState } from "react";
import classNames from "classnames/bind";
import Calendar from "../../../../common/Calendar/Calendar";
import { getMonthlyCalendar, getSampleCalendar } from "calend-arr";
import BarButton from "../../BarButton/BarButton";
import { NewWonder } from "../../../../../types/wonder/newWonder";
import { WonderSchedule } from "../../../../../entity/wonder/wonder";
import { requestTrayResize } from "../../../../../libs/Tray/useTray";
import useEnhancedState from "../../../../../libs/ReactAssistant/useEnhancedState";
import SelectDifferentTime from "./TimeSelect";

const cx = classNames.bind(styles);

type DateInputConfig = {
  isContinuous: boolean;
  includeTime: boolean;
  isSameTime: boolean;
};

type DatePanelProps = {
  schedule: NewWonder["schedule"];
  setSchedule: (schedule: NewWonder["schedule"]) => void;
};

export default function DatePanel({ schedule, setSchedule }: DatePanelProps) {
  const [inputConfig, , setInputConfig] = useEnhancedState<DateInputConfig>({
    isContinuous: false,
    includeTime: schedule.filter(({ time }) => time.length > 0).length > 0,
    isSameTime: false,
  });
  const [stage, setStage] = useState<"type" | "date">("type");
  const [currentSchedule, setCurrentSchedule] =
    useState<NewWonder["schedule"]>(schedule);

  useEffect(() => {
    setSchedule(currentSchedule);
  }, [currentSchedule]);

  return (
    <>
      {stage === "type" && (
        <TypeInput
          toDate={() => setStage("date")}
          setContinuous={(value) => {
            requestTrayResize();
            setInputConfig("isContinuous", value);
          }}
        />
      )}
      {stage === "date" && (
        <DateInput
          currentSchedule={currentSchedule}
          setSchedule={setCurrentSchedule}
          inputConfig={inputConfig}
          setContinuous={(value) => setInputConfig("isContinuous", value)}
          setIncludeTime={(value) => setInputConfig("includeTime", value)}
          setSameTime={(value) => setInputConfig("isSameTime", value)}
        />
      )}
    </>
  );
}

type TypeInputProps = {
  toDate: () => void;
  setContinuous: (value: boolean) => void;
};

function TypeInput({ toDate, setContinuous }: TypeInputProps) {
  const sample = useMemo(() => getSampleCalendar(9, "sun", 21, "mon"), []);

  return (
    <div className={cx("TypeInput")}>
      <div className={cx("title")}>일정 유형을 선택해주세요.</div>
      <button
        className={cx("typeButton")}
        onClick={() => {
          setContinuous(true);
          toDate();
        }}
      >
        <div className={cx("label")}>연속적인 유형인가요?</div>
        <Calendar
          data={sample}
          hasLabel={false}
          hasYearMonth={false}
          weekBeginsWith={1}
        />
      </button>
      <button
        className={cx("typeButton")}
        onClick={() => {
          setContinuous(false);
          toDate();
        }}
      >
        <div className={cx("label")}>불연속적인 유형인가요?</div>
        <Calendar
          data={sample}
          hasLabel={false}
          hasYearMonth={false}
          weekBeginsWith={1}
        />
      </button>
    </div>
  );
}

type DateInputProps = {
  currentSchedule: NewWonder["schedule"];
  setSchedule: (schedule: NewWonder["schedule"]) => void;
  inputConfig: DateInputConfig;
  setContinuous: (value: boolean) => void;
  setIncludeTime: (value: boolean) => void;
  setSameTime: (value: boolean) => void;
};

const selectDatesBetween = (
  begin: [number, number, number],
  end: [number, number, number],
): [number, number, number][] => {
  const [beginYear, beginMonth, beginDate] = begin;
  const [endYear, endMonth, endDate] = end;
  const dates: [number, number, number][] = [];
  for (let year = beginYear; year <= endYear; year++) {
    const beginMonthOfYear = year === beginYear ? beginMonth : 1;
    const endMonthOfYear = year === endYear ? endMonth : 12;
    for (let month = beginMonthOfYear; month <= endMonthOfYear; month++) {
      const beginDateOfMonth =
        year === beginYear && month === beginMonth ? beginDate : 1;
      const endDateOfMonth =
        year === endYear && month === endMonth
          ? endDate
          : new Date(year, month, 0).getDate();
      for (let date = beginDateOfMonth; date <= endDateOfMonth; date++) {
        dates.push([year, month, date]);
      }
    }
  }
  return dates;
};

const isDateSame = (a: [number, number, number], b: [number, number, number]) =>
  a[0] === b[0] && a[1] === b[1] && a[2] === b[2];

const onClickDate =
  (
    schedule: NewWonder["schedule"],
    setSchedule: (schedule: NewWonder["schedule"]) => void,
    { isContinuous, includeTime, isSameTime }: DateInputConfig,
  ) =>
  (year: number, month: number, date: number) => {
    if (isContinuous) {
      //continuous
      if (schedule.length !== 1) {
        //first click
        setSchedule([
          {
            date: [year, month, date],
            time: includeTime
              ? isSameTime
                ? schedule[0].time
                : [[12, 0]]
              : [],
          },
        ]);
      } else {
        //second click
        setSchedule(
          selectDatesBetween(schedule[0].date, [year, month, date]).map(
            (date) => ({
              date,
              time: includeTime
                ? isSameTime
                  ? schedule[0].time
                  : [[12, 0]]
                : [],
            }),
          ),
        );
      }
    } else {
      //not continuous
      const newDate: WonderSchedule = {
        date: [year, month, date],
        time: includeTime ? (isSameTime ? schedule[0].time : [[12, 0]]) : [],
      };
      if (
        schedule
          .map(({ date }) => date)
          .filter((d) => isDateSame(d, [year, month, date])).length > 0
      ) {
        const newSchedule: NewWonder["schedule"] = schedule.filter(
          (d) => !isDateSame(d.date, [year, month, date]),
        );
        setSchedule(newSchedule);
      } else {
        const newSchedule: NewWonder["schedule"] = [...schedule, newDate].sort(
          (a, b) => {
            const [aYear, aMonth, aDate] = a.date;
            const [bYear, bMonth, bDate] = b.date;
            if (aYear !== bYear) return aYear - bYear;
            if (aMonth !== bMonth) return aMonth - bMonth;
            return aDate - bDate;
          },
        );
        setSchedule(newSchedule);
      }
    }
  };
const checkSelected =
  (schedule: NewWonder["schedule"], { isContinuous }: DateInputConfig) =>
  (year: number, month: number, date: number): string => {
    if (isContinuous && schedule.length > 1) {
      return cx({
        isCenter:
          schedule
            .map(({ date }) => date)
            .filter((d) => isDateSame(d, [year, month, date])).length > 0,
        isBegin: isDateSame(schedule[0].date, [year, month, date]),
        isEnd: isDateSame(schedule[schedule.length - 1].date, [
          year,
          month,
          date,
        ]),
      });
    } else {
      return cx({
        selected:
          schedule
            .map(({ date }) => date)
            .filter((d) => isDateSame(d, [year, month, date])).length > 0,
      });
    }
  };

export function DateInput({
  currentSchedule,
  setSchedule,
  inputConfig,
  setContinuous,
  setIncludeTime,
  setSameTime,
}: DateInputProps) {
  const { isContinuous, includeTime, isSameTime } = inputConfig;
  const [[year, month], setYearMonth] = useState<[number, number]>([2023, 7]);
  const calendar = useMemo(
    () => getMonthlyCalendar(year, month, { weekBeginsWith: "mon" }),
    [year, month],
  );

  return (
    <div className={cx("DateInput")}>
      <button className={cx("prevButton")} />
      <Calendar
        data={calendar}
        hasLabel={true}
        hasYearMonth={[year, month]}
        weekBeginsWith={1}
        onClick={(day) =>
          onClickDate(currentSchedule, setSchedule, inputConfig)(
            year,
            month,
            day.date,
          )
        }
        dayClassName={(day) =>
          checkSelected(currentSchedule, inputConfig)(year, month, day.date)
        }
      />
      <div className={cx("configs")}>
        <BarButton
          title={"종료일"}
          interaction={{
            type: "toggle",
            value: isContinuous,
            onToggle: (value) => setContinuous(value),
          }}
          isBold={true}
        />
        <BarButton
          title={"시간 포함"}
          interaction={{
            type: "toggle",
            value: includeTime,
            onToggle: (value) => setIncludeTime(value),
          }}
          isBold={true}
        />
      </div>
      <div className={cx("details", { visible: includeTime })}>
        <div className={cx("title")}>시간 상세 설정</div>
        <div
          className={cx("sameTime")}
          onClick={() => {
            setSameTime(!isSameTime);
          }}
        >
          <div className={cx("toggle")}>
            {isSameTime ? (
              <img src={"/assets/icon/check_box.svg"} />
            ) : (
              <div className={cx("emptyBox")} />
            )}
          </div>
          전체 시간 통일할게요
        </div>
        <div className={cx("timeList")}>
          <SelectDifferentTime
            includeTime={includeTime}
            sameTime={isSameTime}
            schedule={currentSchedule}
            setSchedule={(e) => {
              console.log(e.length > 0 ? e[0].time : "no time");
              setSchedule(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}
