import styles from "./SearchOverlay.module.scss";
import classNames from "classnames/bind";
import Chip from "../../../components/Chip/Chip";
import { GenreTag, StatusTag } from "../../../entity/wonder/tag";
import { navigate } from "../../../libs/Codex";
import { stringify } from "qs";

const cx = classNames.bind(styles);

const genres: GenreTag[] = [
  "exhibition",
  "hof",
  "festival",
  "play",
  "lecture",
  "booth",
  "band",
  "dance",
  "etc",
];

const statuses: StatusTag[] = ["now", "reserveNow"];

type SearchOverlayProps = {
  isClose: boolean;
};

export default function SearchOverlay({ isClose }: SearchOverlayProps) {
  return (
    <div className={cx("SearchOverlay", { isClose })}>
      <div className={cx("container")}>
        <div className={cx("tags")}>
          {genres.map((genre) => (
            <Chip.Genre
              key={genre}
              genre={genre}
              className={cx("tag")}
              onClick={() => navigate(`search?${stringify({ genre })}`)}
            />
          ))}
        </div>
        <div className={cx("tags")}>
          {statuses.map((status) => (
            <Chip.Status
              key={status}
              status={status}
              className={cx("tag", "status")}
            />
          ))}
        </div>
      </div>
      <div className={cx("recent")}>
        <h2 className={cx("label")}>최근 검색</h2>
        <div className={cx("keywords")}>
          <div className={cx("keyword")}>
            <span> 최근 검색어 1</span>
            <button className={cx("delete")}>
              <img src={cx("assets/icon/close.svg")} />
            </button>
          </div>
          <div className={cx("keyword")}>최근 검색어 1</div>
          <div className={cx("keyword")}>최근 검색어 1</div>
          <div className={cx("keyword")}>최근 검색어 1</div>
          <div className={cx("keyword")}>최근 검색어 1</div>
        </div>
      </div>
    </div>
  );
}
