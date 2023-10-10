import classNames from "classnames/bind";
import { Button } from "../../../components/Button/Button";
import { Wonder } from "../../../entity/wonder/wonder";
import { parseWonderScheduleString } from "../../../entity/wonder/wonderFunction";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

type TitleProps = Pick<
  Wonder,
  "title" | "summary" | "schedule" | "reservationProcess"
>;

export default function Title({
  title,
  summary,
  schedule,
  reservationProcess,
}: TitleProps) {
  return (
    <div className={cx("Title")}>
      <h1 className={cx("titleText")}>{title}</h1>
      <h2 className={cx("subTitleText")}>{summary}</h2>
      <div className={cx("schedule")}>
        {parseWonderScheduleString(schedule)}
      </div>
      <Button isFullWidth isMainColored>
        예약하기
      </Button>
      <div className={cx("divider")} />
    </div>
  );
}
