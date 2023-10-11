import styles from "./Location.module.scss";
import { Wonder } from "../../../entity/wonder/wonder";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type LocationProps = { location: Wonder["location"] };

function Location({ location }: LocationProps) {
  return (
    <div className={cx("Location")}>
      <h3 className={cx("label")}>이벤트 장소</h3>
      {location.name}
    </div>
  );
}

export default Location;
