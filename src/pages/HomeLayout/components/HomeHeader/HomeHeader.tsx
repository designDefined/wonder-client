import styles from "./HomeHeader.module.scss";
import shuffleIcon from "../assets/shuffle.svg";
import searchIcon from "../assets/search.svg";

import HeaderLogo from "../../../../components/logos/HeaderLogo/HeaderLogo";
import { useMyAccountStore } from "../../../../store/account/useMyAccountStore";
import classNames from "classnames/bind";
import SearchBar from "../SearchBar/SearchBar";

const cx = classNames.bind(styles);

export default function HomeHeader() {
  const isLoggedIn = useMyAccountStore((state) => state.isLoaded);
  return (
    <header className={styles.HomeHeader}>
      <HeaderLogo />
      <div className={styles.tools}>
        <SearchBar />
        <button className={styles.shuffle}>
          <img src={shuffleIcon} />
        </button>
        <button className={styles.login}>로그인</button>
      </div>
    </header>
  );
}
