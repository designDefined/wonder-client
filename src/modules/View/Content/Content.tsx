import styles from "./Content.module.scss";
import { Wonder } from "../../../entity/wonder/wonder";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentProps = {
  content: Wonder["content"];
};

function Content({ content }: ContentProps) {
  return <div className={cx("Content")}>{content}</div>;
}

function Placeholder() {
  return (
    <div className={cx("Content", "placeholder")}>
      선택된 아이템이 없습니다.
    </div>
  );
}

export default Content;
