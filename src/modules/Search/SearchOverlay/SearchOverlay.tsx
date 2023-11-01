import styles from "./SearchOverlay.module.scss";
import classNames from "classnames/bind";
import Chip from "../../../components/Chip/Chip";
import { GenreTag, StatusTag } from "../../../entity/wonder/tag";
import { navigate } from "../../../libs/Codex";
import { stringify } from "qs";
import { useState } from "react";
import {
  getRecentKeywords,
  saveRecentKeywords,
} from "../../../functions/storage/recentKeywords";

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
  const [recents, setRecents] = useState(getRecentKeywords());
  return (
    <div className={cx("SearchOverlay", { isClose })}>
      <div className={cx("container")}>
        <div className={cx("tags")}>
          {genres.map((genre) => (
            <Chip.Genre
              key={genre}
              genre={genre}
              className={cx("tag")}
              onClick={() =>
                navigate(`search?${stringify({ filter: { genre } })}`)
              }
            />
          ))}
        </div>
        <div className={cx("tags")}>
          {statuses.map((status) => (
            <Chip.Status
              key={status}
              status={status}
              className={cx("tag", "status")}
              onClick={() => navigate(`search?${stringify({ status })}`)}
            />
          ))}
        </div>
      </div>
      <div className={cx("recent")}>
        <h2 className={cx("label")}>최근 검색</h2>
        <div className={cx("keywords")}>
          {recents
            ? recents
                .slice()
                .reverse()
                .map((keyword, index) => (
                  <div className={cx("keyword")} key={index}>
                    <span
                      onClick={() => {
                        const indexToDelete = recents.length - index - 1;
                        const updatedRecents = [
                          ...recents.filter((_, i) => i !== indexToDelete),
                          keyword,
                        ];
                        saveRecentKeywords(updatedRecents.slice(0, 5));
                        setRecents(getRecentKeywords());

                        navigate(
                          `search?${stringify({
                            text: {
                              text: {
                                query: keyword,
                                path: [
                                  "title",
                                  "creator",
                                  "summary",
                                  "content",
                                ],
                              },
                            },
                          })}`,
                        );
                      }}
                    >
                      {keyword}
                    </span>
                    <button
                      className={cx("delete")}
                      onClick={() => {
                        const indexToDelete = recents.length - index - 1;
                        const deletedRecents = recents.filter(
                          (_, i) => i !== indexToDelete,
                        );
                        saveRecentKeywords(deletedRecents.slice(0, 5));
                        setRecents(getRecentKeywords());
                      }}
                    >
                      <img src={cx("assets/icon/close.svg")} />
                    </button>
                  </div>
                ))
            : null}
          {/* <div className={cx("keyword")}>
            <span> 최근 검색어 1</span>
            <button className={cx("delete")}>
              <img src={cx("assets/icon/close.svg")} />
            </button>
          </div>
          <div className={cx("keyword")}>최근 검색어 1</div>
          <div className={cx("keyword")}>최근 검색어 1</div>
          <div className={cx("keyword")}>최근 검색어 1</div>
          <div className={cx("keyword")}>최근 검색어 1</div> */}
        </div>
      </div>
    </div>
  );
}
