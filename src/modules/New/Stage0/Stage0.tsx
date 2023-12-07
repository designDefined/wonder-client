import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";
import styles from "./Stage0.module.scss";
const cx = classNames.bind(styles);

export default function Stage0({
  data,
  setter,
}: {
  data: null | boolean;
  setter: (isReservationRequired: boolean) => void;
}) {
  return (
    <div className={cx("Stage0")}>
      <Button
        className={cx({
          selected: typeof data === "boolean" && data,
        })}
        isFullWidth
        onClick={() => setter(true)}
      >
        예
      </Button>
      <Button
        className={cx({
          selected: typeof data === "boolean" && !data,
        })}
        isFullWidth
        onClick={() => setter(false)}
      >
        아니요
      </Button>
    </div>
  );
}
