import classNames from "classnames/bind";
import styles from "./CreatorInformation.module.scss";
import { CreatorDetail } from "../../types/creator/creatorDetail";

const cx = classNames.bind(styles);

type Props = {
  detail: CreatorDetail;
};
export default function CreatorInformation({
  detail: { name, summary, profileImage },
}: Props) {
  return (
    <div className={cx("CreatorInformation")}>
      <img className={cx("background")} />
      <div className={cx("information")}>
        <div className={cx("profile")}>
          <img src={profileImage.src} alt={profileImage.altText} />
        </div>
        <div className={cx("text")}>
          <div className={cx("name")}>{name}</div>
          <div className={cx("summary")}>{summary}</div>
        </div>
      </div>
    </div>
  );
}
