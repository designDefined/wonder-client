import classNames from "classnames/bind";
import { MouseEventHandler } from "react";
import { Wonder } from "../../entity/wonder";
import translateGenre from "../../functions/translate/genre";
import translateStatus from "../../functions/translate/status";
import styles from "./Chip.module.scss";

const cx = classNames.bind(styles);

type BaseProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
};

type GenreChipProps = BaseProps & {
  genre: Wonder["tag"]["genre"];
};

type StatusChipProps = BaseProps & {
  status: Wonder["tag"]["status"];
};

function Genre({ genre, className, onClick }: GenreChipProps) {
  return (
    <span className={cx("Chip", "genre", className)} onClick={onClick}>
      {translateGenre.engToKr(genre)}
    </span>
  );
}

function Status({ status, className, onClick }: StatusChipProps) {
  return (
    <span className={cx("Chip", "status", status, className)} onClick={onClick}>
      {translateStatus.engToKr(status)}
    </span>
  );
}

const Chip = {
  Genre,
  Status,
};

export default Chip;
