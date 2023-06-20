import styles from "./New.module.scss";
import TextInput from "../../components/common/TextInput/TextInput";
import { useState } from "react";
import { NewWonder } from "../../types/wonder/newWonder";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import RichTextArea from "../../components/New/RichTextArea/RichTextArea";
import ThumbnailUploader from "../../components/New/ThumbnailUploader/ThumbnailUploader";
import ToggleButton from "../../components/common/Toggle/ToggleButton";
import Button from "../../components/common/Button/Button";
import api from "../../api";
import { navigate } from "../../libs/Codex";
export default function New() {
  const [newWonder, setNewWonder] = useState<NewWonder>({
    thumbnail: null,
    title: "",
    summary: "",
    tags: [],
    content: "",
    schedule: [],
    location: "",
    reservationProcess: null,
  });

  const setNewWonderValue = (key: keyof NewWonder, value: any) =>
    setNewWonder({ ...newWonder, [key]: value });

  return (
    <main className={styles.New}>
      <DefaultHeader />
      <ThumbnailUploader
        value={newWonder.thumbnail ? newWonder.thumbnail.src : ""}
        setValue={(src) => setNewWonderValue("thumbnail", { src, altText: "" })}
      />
      <div className={styles.mainContent}>
        <TextInput
          title={"이벤트 제목"}
          value={newWonder.title}
          onChange={(e) => setNewWonderValue("title", e.target.value)}
          placeholder={"30자 이내. 예) 2023년 2학기 정보문화학 과제전"}
        />
        <TextInput
          title={"이벤트 태그"}
          value={newWonder.tags.join(" ")}
          onChange={(e) => {
            const splits = e.target.value.split(" ");
            const mapped = splits.map((chunk, index) =>
              index !== splits.length - 1 &&
              chunk[0] !== "#" &&
              chunk.length > 0
                ? "#" + chunk
                : chunk,
            );
            setNewWonderValue("tags", mapped);
          }}
          onBlur={() => {
            setNewWonderValue(
              "tags",
              newWonder.tags.map((chunk) =>
                chunk[0] !== "#" && chunk.length > 0 ? "#" + chunk : chunk,
              ),
            );
          }}
          placeholder={"예) 연극, 뮤지컬, 일일호프, 연주회, 전시"}
        />
        <TextInput
          title={"이벤트 한 줄 요약"}
          value={newWonder.summary}
          onChange={(e) => setNewWonderValue("summary", e.target.value)}
          placeholder={"이벤트를 요약하는 내용을 작성해주세요."}
        />
        <RichTextArea
          title={"이벤트 내용"}
          value={newWonder.content}
          onChange={(e) => setNewWonderValue("content", e.target.value)}
          placeholder={
            "/* 여기도 뭐 유의사항 적어놓자.. 1000자 이내.. 이미지는 10장 이내.. 대충 이런거 */"
          }
        />
        <div className={styles.divider} />
        <div className={styles.horizon}>
          <div className={styles.titleBig}>이벤트 일정</div>
        </div>
        <div className={styles.horizon}>
          <div className={styles.titleBig}>이벤트 장소</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.horizon}>
          <div className={styles.titleBig}>예약 / 예매</div>
          <ToggleButton onChange={() => {}} defaultValue={true} />
        </div>
        <div className={styles.horizon}>
          <div className={styles.titleSmall}>이름을 받을게요</div>
          <ToggleButton onChange={() => {}} />
        </div>
        <div className={styles.horizon}>
          <div className={styles.titleSmall}>전화번호를 받을게요</div>
          <ToggleButton onChange={() => {}} />
        </div>
        <div className={styles.horizon}>
          <div className={styles.titleSmall}>메일 주소를 받을게요</div>
          <ToggleButton onChange={() => {}} />
        </div>
      </div>
      <Button
        label={"원더 생성"}
        attribute={{ size: "big", theme: "default" }}
        onClick={() => {
          api.post("/wonder", newWonder).then((res) => {
            const data = res as number;
            alert("업로드 완료");
            navigate(`/view/${data}`);
          });
        }}
      />
    </main>
  );
}
