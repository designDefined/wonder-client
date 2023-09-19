import classNames from "classnames/bind";
import { Wonder } from "../../entity/wonder/wonder";
import {
  translateWonderGenre,
  translateWonderStatus,
} from "../../entity/wonder/wonderFunction";
import styles from "./Chip.module.scss";

const cx = classNames.bind(styles);

type GenreChipProps = {
  genre: Wonder["tag"]["genre"];
};

type StatusChipProps = {
  status: Wonder["tag"]["status"];
};

function Genre({ genre }: GenreChipProps) {
  return (
    <span className={cx("Chip", "genre")}>{translateWonderGenre(genre)}</span>
  );
}

function Status({ status }: StatusChipProps) {
  return (
    <span className={cx("Chip", "status", status)}>
      {translateWonderStatus(status)}
    </span>
  );
}

const Chip = {
  Genre,
  Status,
};

export default Chip;
