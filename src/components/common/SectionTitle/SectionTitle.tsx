import classNames from "classnames/bind";
import styles from "./SectionTitle.module.scss";

type Props = {
  title: string;
  attribute: {
    size: "big" | "medium" | "small";
  };
  onClick?: () => void;
  className?: string;
  isArrow?: boolean;
};

export default function SectionTitle({
  title,
  className,
  attribute,
  onClick,
  isArrow,
}: Props) {
  return (
    <div
      className={`${styles.SectionTitle} ${styles[attribute.size]}  ${
        onClick ? styles.clickable : ""
      } ${className ?? ""}`}
      onClick={onClick}
    >
      <div className={styles.title}>{title}</div>
      {onClick &&
        (isArrow ? (
          <img src={"/assets/icon/arrow_forward_ios.svg"} />
        ) : (
          <span className={styles.more}>더보기</span>
        ))}
    </div>
  );
}
