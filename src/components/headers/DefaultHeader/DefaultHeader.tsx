import styles from "./DefaultHeader.module.scss";
import shuffleIcon from "../../../assets/icon/shuffle.svg";
import HeaderLogo from "../../logos/HeaderLogo/HeaderLogo";
import classNames from "classnames/bind";
import SearchBar from "../../Home/SearchBar/SearchBar";
import Profile from "../../Home/Profile/Profile";
import { navigate } from "../../../libs/Codex";
import { useEffect } from "react";
import { tryAutoLogin } from "../../../libs/AutoLogin/autoLogin";
import { autoLoginUser, useAccount } from "../../../store/account/useAccount";

const cx = classNames.bind(styles);

export default function DefaultHeader() {
  const myAccount = useAccount((state) => state.user);

  useEffect(() => {
    if (!myAccount) void autoLoginUser();
  }, []);

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
              navigate("/login", "slideNext");
            }}
          >
            로그인
          </button>
        )}
      </div>
    </header>
  );
}
