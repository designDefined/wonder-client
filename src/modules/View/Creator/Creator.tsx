import classNames from "classnames/bind";
import { Wonder } from "../../../entity/wonder";
import styles from "./Creator.module.scss";

const cx = classNames.bind(styles);

type CreatorProps = {
  creator: Wonder["creator"];
};

export default function Creator({ creator }: CreatorProps) {
  return (
    <div className={cx("Creator")}>
      <div className={cx("label")}>크리에이터</div>
      <div className={cx("profile")}>
        <img
          className={cx("profileImage")}
          src={creator.profileImage.src}
          alt={creator.profileImage.altText}
        />
        <div className={cx("detail")}>
          <div className={cx("name")}>{creator.name}</div>
          <div className={cx("summary")}>{creator.summary}</div>
        </div>
      </div>
    </div>
  );
}
