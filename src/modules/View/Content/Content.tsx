import styles from "./Content.module.scss";
import { Wonder } from "../../../entity/wonder";
import classNames from "classnames/bind";
import Example from "./Examples";
import Markdown from "react-markdown";

const cx = classNames.bind(styles);

type ContentProps = {
  id: Wonder["id"];
  content: Wonder["content"];
};

function Content({ id, content }: ContentProps) {
  return (
    <div className={cx("Content")}>
      <Markdown>{Example[id] ?? Example[0]}</Markdown>
    </div>
  );
}

function Placeholder() {
  return (
    <div className={cx("Content", "placeholder")}>
      선택된 아이템이 없습니다.
    </div>
  );
}

export default Content;
