import classNames from "classnames/bind";
import { parse, stringify } from "qs";
import { useEffect, useState } from "react";
import Chip from "../../components/Chip/Chip";
import { GenreTag } from "../../entity/wonder/tag";
import { navigate } from "../../libs/Codex";
import SearchOverlay from "../../modules/Search/SearchOverlay/SearchOverlay";
import Wonders from "../../modules/Search/Wonders/Wonders";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchTag, setSearchTag] = useState<GenreTag[]>([]);
  const [query, setQuery] = useState(
    parse(window.location.search, {
      plainObjects: true,
      ignoreQueryPrefix: true,
    }),
  );
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  useEffect(() => {
    const parsedQuery = parse(window.location.search, {
      plainObjects: true,
      ignoreQueryPrefix: true,
    });
    if (window.location.search) {
      setIsOverlayOpen(false);
    }

    // query: all
    if (parsedQuery.all) {
      console.log("!");
      setQuery({});
    } else {
      setQuery(parsedQuery);
    }

    // query: tag
    if (parsedQuery.genre) {
      const genre = parsedQuery.genre as GenreTag;
      setSearchTag([genre]);
    }

    // query: search text
    if (parsedQuery.$text) {
      // @ts-ignore
      const searchValue = (parsedQuery.$text.$search ?? "") as string;
      setSearchValue(searchValue);
    }
  }, [window.location.search]);

  return (
    <main className={cx("Search")}>
      <header className={cx("bar")}>
        <button
          className={cx("back")}
          onClick={() => {
            if (isOverlayOpen) {
              navigate("/search?all=true");
            } else {
              navigate("/", "slidePrevious");
            }
          }}
        >
          <img
            className={cx("backIcon")}
            src="/assets/icon/arrow_backward_ios.svg"
          />
        </button>
        <form
          className={cx("inputWrapper")}
          onSubmit={(e) => {
            e.preventDefault();
            if (!searchValue) {
              navigate(`search?all=true`);
            } else {
              navigate(
                `search?${stringify({ $text: { $search: searchValue } })}`,
              );
            }
          }}
        >
          <input
            className={cx("searchInput")}
            value={searchValue}
            onFocus={() => {
              setIsOverlayOpen(true);
              setSearchTag([]);
            }}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <input
            type="image"
            className={cx("searchButton")}
            src="assets/icon/search.svg"
          />
          <div className={cx("searchTags")}>
            {searchTag.map((tag) => (
              <Chip.Genre key={tag} genre={tag} />
            ))}
          </div>
        </form>
      </header>
      <SearchOverlay isClose={!isOverlayOpen} />
      <Wonders query={query} />
    </main>
  );
}
