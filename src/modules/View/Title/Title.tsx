import classNames from "classnames/bind";
import { Button } from "../../../components/Button/Button";
import { Wonder } from "../../../entity/wonder/wonder";
import { parseScheduleToPeriodString } from "../../../functions/parse/parseSchedule";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

type TitleProps = Pick<
  Wonder,
  "title" | "summary" | "schedule" | "reservationProcess"
>;

function Title({ title, summary, schedule, reservationProcess }: TitleProps) {
  return (
    <div className={cx("Title")}>
      <h1 className={cx("titleText")}>{title}</h1>
      <h2 className={cx("subTitleText")}>{summary}</h2>
      <div className={cx("schedule")}>
        {parseScheduleToPeriodString(schedule, "YYYY. MM. DD", " - ")}
      </div>
      {reservationProcess && (
        <Button isFullWidth isMainColored>
          예약하기
        </Button>
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
