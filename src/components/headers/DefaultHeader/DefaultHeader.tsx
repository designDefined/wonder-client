import styles from "./DefaultHeader.module.scss";
import shuffleIcon from "../../../assets/icon/shuffle.svg";
import HeaderLogo from "../../logos/HeaderLogo/HeaderLogo";
import { useMyAccountStore } from "../../../store/account/useMyAccountStore";
import classNames from "classnames/bind";
import SearchBar from "../../Home/SearchBar/SearchBar";
import Profile from "../../Home/Profile/Profile";
import { navigate } from "../../../libs/Codex";

const cx = classNames.bind(styles);

export default function DefaultHeader() {
  const myAccount = useMyAccountStore((state) => state.data);

  return (
    <header className={cx("DefaultHeader")}>
      <HeaderLogo />
      <div className={styles.tools}>
        <SearchBar />
        <button className={styles.shuffle}>
          <img src={shuffleIcon} />
        </button>
        {myAccount ? (
          <Profile myAccount={myAccount} />
        ) : (
          <button
            className={styles.login}
            onClick={() => {
              navigate("login", "slideNext");
            }}
          >
            로그인
          </button>
        )}
      </div>
      <div className={cx("LoginHeader")}>Login</div>
    </header>
  );
}
