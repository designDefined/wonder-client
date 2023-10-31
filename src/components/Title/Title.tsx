import classNames from "classnames/bind";
import { navigate } from "../../libs/Codex";
import styles from "./Title.module.scss";
import { PropsWithChildren } from "react";
import Link from "../../libs/Codex/components/Link/Link";

const cx = classNames.bind(styles);

type TitleOnlyProps = {
  title?: string;
  className?: string;
};

type TitleProps = PropsWithChildren &
  TitleOnlyProps & {
    onClick: (() => void) | string;
    currentValue?: string;
  };

function Title({ title, className }: TitleOnlyProps) {
  return (
    <h1 className={cx("Title", "label", "withoutMore", className)}>{title}</h1>
  );
}

function More({ title, className, onClick }: TitleProps) {
  return (
    <div className={cx("Title", "withMore", className)}>
      <h1 className={cx("label")}>{title}</h1>
      {typeof onClick === "function" ? (
        <button className={cx("more")} onClick={onClick}>
          더보기
        </button>
      ) : (
        <Link className={cx("more")} to={onClick}>
          더보기
        </Link>
      )}
    </div>
  );
}

function Arrow({ title, className, onClick, currentValue }: TitleProps) {
  return (
    <div className={cx("Title", "withArrow", className)}>
      <h1 className={cx("label")}>{title}</h1>
      {typeof onClick === "function" ? (
        <button className={cx("arrow")} onClick={onClick}>
          <div className={cx("currentValue")}>{currentValue}</div>
          <img src="assets/icon/arrow_forward_ios.svg" alt="right arrow icon" />
        </button>
      ) : (
        <Link className={cx("arrow")} to={onClick}>
          <div className={cx("currentValue")}>{currentValue}</div>
          <img
            src="/assets/icon/arrow_forward_ios.svg"
            alt="right arrow icon"
          />
        </Link>
      )}
    </div>
  );
}

function Plus({ title, className, onClick }: TitleProps) {
  return (
    <div className={cx("Title", "arrow", className)}>
      <h1 className={cx("label")}>{title}</h1>
      {typeof onClick === "function" ? (
        <button className={cx("more")}>
          <img src="/assets/icon/plus.svg" alt="plus icon" />
        </button>
      ) : (
        <a
          className={cx("more")}
          onClick={(e) => {
            e.preventDefault();
            navigate(onClick, "slideNext");
          }}
        >
          <img src="/assets/icon/plus.svg" alt="plusicon" />
        </a>
      )}
    </div>
  );
}

Title.More = More;
Title.Arrow = Arrow;
Title.Plus = Plus;

export default Title;
