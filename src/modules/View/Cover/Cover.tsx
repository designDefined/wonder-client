import classNames from "classnames/bind";
import Chip from "../../../components/Chip/Chip";
import { Wonder } from "../../../entity/wonder/wonder";
import styles from "./Cover.module.scss";

const cx = classNames.bind(styles);

type CoverProps = {
  thumbnail: Wonder["thumbnail"];
  tag: Wonder["tag"];
};

export default function Cover({ thumbnail, tag }: CoverProps) {
  return (
    <div className={cx("Cover")}>
      <div className={cx("thumbnailBackground")}>
        <img
          className={cx("thumbnail")}
          src={thumbnail.src}
          alt={thumbnail.altText}
        />
        <div className={cx("info")}>
          <div className={cx("tags")}>
            <Chip.Status status={tag.status} />
            <Chip.Genre genre={tag.genre} />
          </div>
          <div className={cx("buttons")}>
            <button>
              <img
                className={cx("likeIcon")}
                src={"/assets/icon/heart/likeEmpty.svg"}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
