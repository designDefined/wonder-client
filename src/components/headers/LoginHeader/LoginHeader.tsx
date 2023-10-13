import classNames from "classnames/bind";
import { navigate } from "../../../libs/Codex";
import styles from "./LoginHeader.module.scss";
import back_icon from "/assets/icon/arrow_back.svg";

const cx = classNames.bind(styles);

export default function LoginHeader() {
  return (
    <header className={cx("LoginHeader")}>
      <h2>LOGIN</h2>
      <button
        className={cx("back")}
        onClick={() => {
          navigate("/", "slidePrevious");
        }}
      >
        <img src={back_icon} alt="left arrow icon" />
      </button>
    </header>
  );
}
