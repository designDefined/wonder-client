import classNames from "classnames/bind";
import { CreatorSummary } from "../../../entity/creator/summary";
import { navigate } from "../../../libs/Codex";
import styles from "./Creator.module.scss";

const cx = classNames.bind(styles);

type CreatorProps = {
  creator: CreatorSummary;
};

export default function Creator({ creator }: CreatorProps) {
  return (
    <div
      className={cx("Creator")}
      onClick={(e) => navigate(`/creator/${creator.id}`, "slideNext")}
    >
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
