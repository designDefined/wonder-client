import classNames from "classnames/bind";
import { navigate } from "../../libs/Codex";
import styles from "./Title.module.scss";
import { PropsWithChildren } from "react";

const cx = classNames.bind(styles);

type TitleOnlyProps = {
  title?: string;
  className?: string;
};

type TitleProps = PropsWithChildren &
  TitleOnlyProps & {
    onClick: (() => void) | string;
  };

function Title({ title, className }: TitleOnlyProps) {
  return (
    <h1 className={cx("Title", "label", "withoutMore", className)}>{title}</h1>
  );
}

function More({ title, className, onClick }: TitleProps) {
  return (
    <div className={cx("Title", className)}>
      <h1 className={cx("label")}>{title}</h1>
      {typeof onClick === "function" ? (
        <button className={cx("more")}>더보기</button>
      ) : (
        <a
          className={cx("more")}
          onClick={(e) => {
            e.preventDefault();
            navigate(onClick);
          }}
        >
          더보기
        </a>
      )}
    </div>
  );
}

function Arrow({ title, className, onClick }: TitleProps) {
  return (
    <div className={cx("Title", "arrow", className)}>
      <h1 className={cx("label")}>{title}</h1>
      {typeof onClick === "function" ? (
        <button className={cx("more")}>
          <img src="assets/icon/arrow_forward_ios.svg" alt="right arrow icon" />
        </button>
      ) : (
        <a
          className={cx("more")}
          onClick={(e) => {
            e.preventDefault();
            navigate(onClick);
          }}
        >
          <img src="assets/icon/arrow_forward_ios.svg" alt="right arrow icon" />
        </a>
      )}
    </div>
  );
}

Title.More = More;
Title.Arrow = Arrow;

export default Title;
