import styles from "./HomeHeader.module.scss";
import shuffleIcon from "../assets/shuffle.svg";
import searchIcon from "../assets/search.svg";

import HeaderLogo from "../../../../components/logos/HeaderLogo/HeaderLogo";
import { useMyAccountStore } from "../../../../store/account/useMyAccountStore";
import classNames from "classnames/bind";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Profile from "../Profile/Profile";

const cx = classNames.bind(styles);

export default function HomeHeader() {
  const isLoggedIn = useMyAccountStore((state) => state.isLoaded);
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(location.pathname === "/login");
  useEffect(() => {
    if (location.pathname === "/login") {
      setIsLogin(true);
    }
  }, [location]);
  return (
    <header className={cx("HomeHeader", { isLogin })}>
      <HeaderLogo />
      <div className={styles.tools}>
        <SearchBar />
        <button className={styles.shuffle}>
          <img src={shuffleIcon} />
        </button>
        {isLoggedIn ? (
          <Profile />
        ) : (
          <button
            className={styles.login}
            onClick={() => {
              navigate("/login");
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
