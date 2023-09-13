import classNames from "classnames/bind";
import styles from "./Chip.module.scss";

const cx = classNames.bind(styles);

type GenreChipProps = {
  genre: string;
};

type StatusChipProps = {
  status:
    | "reserveSoon"
    | "reserveNow"
    | "reserveFinished"
    | "soon"
    | "now"
    | "finished";
};

function Genre({ genre }: GenreChipProps) {
  return <span className={cx("Chip", "genre")}>{genre}</span>;
}

const translateStatus = (status: StatusChipProps["status"]): string => {
  if (status === "reserveSoon") return "예약 예정";
  if (status === "reserveNow") return "예약 중";
  if (status === "reserveFinished") return "예약 마감";
  if (status === "soon") return "진행 예정";
  if (status === "now") return "진행 중";
  if (status === "finished") return "종료";
  return "상태 오류";
};

function Status({ status }: StatusChipProps) {
  return (
    <span className={cx("Chip", "status", status)}>
      {translateStatus(status)}
    </span>
  );
}

const Chip = {
  Genre,
  Status,
};

export default Chip;
