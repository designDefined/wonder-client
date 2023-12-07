import styles from "./Content.module.scss";
import { Wonder } from "../../../entity/wonder";
import classNames from "classnames/bind";
import draftToHtml from "draftjs-to-html";
import { RawDraftContentState } from "react-draft-wysiwyg";

const cx = classNames.bind(styles);

type ContentProps = {
  id: Wonder["id"];
  content: Wonder["content"];
};

function Content({ id, content }: ContentProps) {
  return (
    <div className={cx("Content")}>
      <div
        dangerouslySetInnerHTML={{
          __html: draftToHtml(JSON.parse(content) as RawDraftContentState),
        }}
      />
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
