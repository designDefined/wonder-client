import classNames from "classnames/bind";
import { Wonder } from "../../entity/wonder/wonder";
import styles from "./Card.module.scss";
import Link from "../../libs/Codex/components/Link/Link";
import Chip from "../Chip/Chip";
import { IconLike } from "../../assets/wonder/like";
import { parseScheduleToPeriodString } from "../../functions/parse/parseSchedule";
import { Reservation } from "../../entity/reservation/reservation";
import { parseDateToPeriodString } from "../../functions/parse/parseDate";

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
        {parseScheduleToPeriodString(schedule, "MM.DD", "-")}
      </div>
    </Link>
  );
}

type ThumbnailOnlyProps = BasicProps & {
  wonder: Pick<Wonder, "id" | "thumbnail">;
  className?: string;
};

function ThumbnailOnly({
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

type ReservedProps = BasicProps & {
  wonder: Pick<
    Wonder,
    "id" | "title" | "tag" | "summary" | "thumbnail" | "location"
  >;
  reservation: Reservation;
  isSimple: boolean;
  isPassedReservation: boolean;
};

function Reserved({
  wonder: { id, title, tag, summary, thumbnail, location },
  reservation: { time },
  isSimple,
  isPassedReservation,
}: ReservedProps) {
  return (
    <Link className={cx("Reserved", { simple: isSimple })} to={`/view/${id}`}>
      <img
        className={cx("thumbnail")}
        src={thumbnail.src}
        alt={thumbnail.altText}
      />
      <div className={cx("contents")}>
        {!isSimple && (
          <div className={cx("tags")}>
            <Chip.Genre genre={tag.genre} />
          </div>
        )}
        <div className={cx("title")}>{title}</div>
        {!isSimple && <div className={cx("summary")}>{summary}</div>}
        <div className={cx("time")}>{`${parseDateToPeriodString(
          time,
          "YYYY. MM. DD | hh:mm",
        )}${isPassedReservation ? "" : " 예약"}`}</div>
        {!isSimple && <div className={cx("location")}>{location.name}</div>}
      </div>
    </Link>
  );
}

type SearchedProps = BasicProps & {
  wonder: Pick<
    Wonder,
    "id" | "title" | "tag" | "summary" | "thumbnail" | "schedule"
  >;
};

function Searched({
  wonder: { id, title, tag, summary, thumbnail, schedule },
  className,
}: SearchedProps) {
  return (
    <Link className={cx("Searched", className)} to={`/view/${id}`}>
      <img
        className={cx("thumbnail")}
        src={thumbnail.src}
        alt={thumbnail.altText}
      />
      <div className={cx("contents")}>
        <div className={cx("information")}>
          <div className={cx("tags")}>
            <Chip.Genre genre={tag.genre} />
          </div>
          <div className={cx("title")}>{title}</div>
          <div className={cx("summary")}>{summary}</div>
        </div>
        <div className={cx("period")}>
          {parseScheduleToPeriodString(schedule, "MM.DD", " - ")}
        </div>
      </div>
    </Link>
  );
}

const Card = {
  Vertical,
  ThumbnailOnly,
  Reserved,
  Searched,
};

export default Card;
