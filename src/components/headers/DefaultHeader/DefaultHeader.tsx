import styles from "./DefaultHeader.module.scss";
import HeaderLogo from "../../logos/HeaderLogo/HeaderLogo";
import classNames from "classnames/bind";
import searchIcon from "/assets/icon/search.svg";
import { navigate } from "../../../libs/Codex";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../../api/user";
import Profile from "../../Profile/Profile";

const cx = classNames.bind(styles);

export default function DefaultHeader() {
  const { data, isFetched } = useQuery(getMe);

  return (
    <header className={cx("DefaultHeader")}>
      <HeaderLogo />
      <div className={cx("buttons")}>
        <button
          className={cx("search")}
          onClick={() => {
            navigate("/search", "slideNext");
          }}
        >
          <img src={searchIcon} />
        </button>
        {!isFetched ? (
          <div className={cx("placeholder")} />
        ) : data ? (
          <Profile.Me myInfo={data} />
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
