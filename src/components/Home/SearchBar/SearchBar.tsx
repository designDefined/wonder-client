import { navigate } from "../../../libs/Codex";
import styles from "./SearchBar.module.scss";
import searchIcon from "/assets/icon/search.svg";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function SearchBar() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className={cx("SearchBarWrapper", { isSearching })}>
      <button
        className={styles.searchButton}
        onClick={() => {
          navigate("/wonders", "slideNext");
          //setIsSearching(!isSearching);
        }}
      >
        <img src={searchIcon} />
      </button>
      {isSearching && (
        <input
          className={cx("searchBar")}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      )}
    </div>
  );
}
