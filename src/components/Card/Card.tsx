import classNames from "classnames/bind";
import { Wonder } from "../../entity/wonder/wonder";
import styles from "./Card.module.scss";
import Link from "../../libs/Codex/components/Link/Link";
import Chip from "../Chip/Chip";
import { parseWonderScheduleString } from "../../entity/wonder/wonderFunction";
import { IconLike } from "../../assets/wonder/like";

const cx = classNames.bind(styles);

type BasicProps = {
  className?: string;
};

type VerticalProps = BasicProps & {
  wonder: Pick<
    Wonder,
    "id" | "title" | "tag" | "thumbnail" | "liked" | "schedule"
  >;
};

function Vertical({
  wonder: { id, title, tag, thumbnail, liked, schedule },
  className,
}: VerticalProps) {
  return (
    <Link className={cx("Vertical", className)} to={`/view/${id}`}>
      <div className={cx("thumbnailWrapper")}>
        <img
          className={cx("thumbnail")}
          src={thumbnail.src}
          alt={thumbnail.altText}
        />
        <button
          className={cx("likeButton")}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <IconLike filled={liked} />
        </button>
      </div>
      <div className={cx("tags")}>
        <Chip.Status status={tag.status} />
        <Chip.Genre genre={tag.genre} />
      </div>
      <div className={cx("title")}>{title}</div>
      <div className={cx("schedule")}>
        {parseWonderScheduleString(schedule)}
      </div>
    </Link>
  );
}

type ThumbnailOnlyProps = BasicProps & {
  wonder: Pick<Wonder, "id" | "thumbnail">;
  className?: string;
};

export function ThumbnailOnly({
  wonder: { id, thumbnail },
  className,
}: ThumbnailOnlyProps) {
  return (
    <Link className={cx("ThumbnailOnly", className)} to={`/view/${id}`}>
      <img
        className={cx("thumbnail")}
        src={thumbnail.src}
        alt={thumbnail.altText}
      />
    </Link>
  );
}

const Card = {
  Vertical,
  ThumbnailOnly,
};

export default Card;
