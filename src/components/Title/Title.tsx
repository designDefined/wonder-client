import classNames from "classnames/bind";
import { navigate } from "../../libs/Codex";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

type TitleOnlyProps = {
  title?: string;
  className?: string;
  children?: never;
};

type TitleProps = TitleOnlyProps & {
  onClick: (() => void) | string;
};

function Title({ title, className }: TitleOnlyProps) {
  return (
    <h1 className={cx("Title", "label", "withoutMore", className)}>{title}</h1>
  );
}

function More({
  title,
  className,
  onClick,
  moreText,
}: TitleProps & { moreText?: string }) {
  return (
    <div className={cx("Title", className)}>
      <h1 className={cx("label")}>{title}</h1>
      {typeof onClick === "function" ? (
        <button className={cx("more")}>{moreText ?? "더보기"}</button>
      ) : (
        <a
          className={cx("more")}
          onClick={(e) => {
            e.preventDefault();
            navigate(onClick);
          }}
        >
          {moreText ?? "더보기"}
        </a>
      )}
    </div>
  );
}

function Arrow({}) {
  return <div></div>;
}

Title.More = More;
Title.Arrow = Arrow;

export default Title;
