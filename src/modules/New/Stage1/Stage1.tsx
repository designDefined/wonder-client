import classNames from "classnames/bind";
import { convertToRaw, EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import Chip from "../../../components/Chip/Chip";
import Input from "../../../components/Input/Input";
import { GenreTag } from "../../../entity/wonder/tag";
import { pushFileToPresignedURL } from "../../../functions/aws/getPresignedURL";
import { NewWonderInput } from "../../../pages/new/NewWonder/NewWonderPage";
import styles from "./Stage1.module.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";

const cx = classNames.bind(styles);

type Data = Pick<
  NewWonderInput,
  "thumbnail" | "title" | "summary" | "genre" | "content"
>;

const genres: GenreTag[] = [
  "exhibition",
  "hof",
  "festival",
  "play",
  "lecture",
  "booth",
  "band",
  "dance",
  "etc",
];

export default function Stage1({
  data,
  setter,
}: {
  data: Data;
  setter: (data: Partial<Data>) => void;
}) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState: EditorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
    setter({
      content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    });
    console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  };
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    data.thumbnail?.src ?? null,
  );
  return (
    <div className={cx("Stage1")}>
      <div className={cx("thumbnail")}>
        <div className={cx("thumbnailInput")}>
          <img
            className={cx("thumbnailPreview")}
            src={previewUrl ?? "/assets/icon/add_thumbnail.svg"}
          />
          <label className={cx("fileLabel")} htmlFor="thumb" />
          <input
            type="file"
            name="thumbnail"
            id="thumb"
            className={cx("fileInput")}
            onChange={(e) => {
              const file = e.target.files ? e.target.files[0] : null;
              if (!file) return;
              pushFileToPresignedURL(file)
                .then((url) => {
                  if (url) {
                    setPreviewUrl(url);
                    setter({ thumbnail: { src: url, altText: "thumbnail" } });
                  }
                })
                .catch(console.log);
            }}
          />
        </div>
        <div className={cx("thumbnailContent")}>
          <div className={cx("thumbnailTitle")}>대표 사진</div>
          <div className={cx("thumbnailDescription")}>
            일반 포스터 비율 (1:.414) 업로드를 권장해요.
          </div>
        </div>
      </div>
      <Input.Text
        title="제목*"
        value={data.title}
        onChange={(e) => setter({ title: e.target.value })}
        placeholder="24자 이내로 작성해주세요"
        maxLength={24}
        isHintAvailable
      />
      <Input.Text
        title="한 줄 요약*"
        value={data.summary}
        onChange={(e) => setter({ summary: e.target.value })}
        placeholder="25자 이내로 작성해주세요"
        maxLength={25}
        isHintAvailable
      />

      <div>
        <h3 className={cx("name")}>이벤트 구분</h3>
        <div className={cx("tags")}>
          {genres.map((genre) => (
            <Chip.Genre
              key={genre}
              genre={genre}
              className={cx("tag", { selected: data.genre === genre })}
              onClick={() => setter({ genre })}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className={cx("name")}>본문</h3>
        <Editor
          wrapperClassName={cx("editor-wrapper")}
          editorClassName={cx("editor-main")}
          toolbarClassName={cx("editor-toolbar")}
          toolbar={{
            options: [
              "inline",
              "list",
              "textAlign",
              "history",
              "blockType",
              // "bold",
            ],
          }}
          localization={{
            locale: "ko",
          }}
          editorState={editorState}
          // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
}
