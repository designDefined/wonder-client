import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import Link from "../../libs/Codex/components/Link/Link";
import Chip from "../Chip/Chip";
import { IconLike } from "../../assets/wonder/like";
import { parseScheduleToPeriodString } from "../../functions/parse/parseSchedule";
import { parseDateToPeriodString } from "../../functions/parse/parseDate";
import { WonderSummary } from "../../entity/wonder/summary";
import { ReservationForUser } from "../../entity/reservation/forUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postWonderLike } from "../../api/wonder";
import { navigate } from "../../libs/Codex";
import { getMe } from "../../api/user";
import { CreatorSummary } from "../../entity/creator/summary";

const cx = classNames.bind(styles);

type BasicProps = {
  className?: string;
};

type VerticalProps = BasicProps & {
  wonder: WonderSummary;
  liked: boolean;
};

function Vertical({
  wonder: { id, title, tag, thumbnail, schedule },
  liked,
  className,
}: VerticalProps) {
  const { data: me } = useQuery(getMe);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    ...postWonderLike(id),
    onSuccess: () => {
      void queryClient.invalidateQueries(["wonder", "list"]);
      void queryClient.invalidateQueries(["user", "me"]);
    },
  });
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
            if (!me) {
              alert("로그인이 필요합니다.");
              navigate("/login", "slideNext");
              return;
            }
            mutate(!liked);
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

export type ThumbnailOnlyProps = BasicProps & {
  wonder: WonderSummary;
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
  wonder: WonderSummary;
  reservation: ReservationForUser;
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
  wonder: WonderSummary;
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

type CreatorProps = BasicProps & {
  creator: CreatorSummary;
};

function Creator({
  creator: { id, name, profileImage },
  className,
}: CreatorProps) {
  return (
    <Link className={cx("Creator", className)} to={`/creator/${id}`}>
      <img
        className={cx("profileImage")}
        src={profileImage.src}
        alt={profileImage.altText}
      />
      <div className={cx("title")}>{name}</div>
    </Link>
  );
}

const Card = {
  Vertical,
  ThumbnailOnly,
  Reserved,
  Searched,
  Creator,
};

export default Card;
