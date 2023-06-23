import styles from "./NewWonderPage.module.scss";
import TextInput from "../../../components/common/TextInput/TextInput";
import { useCallback, useState } from "react";
import { NewWonder } from "../../../types/wonder/newWonder";
import DefaultHeader from "../../../components/headers/DefaultHeader/DefaultHeader";
import RichTextArea from "../../../components/New/RichTextArea/RichTextArea";
import ThumbnailUploader from "../../../components/New/ThumbnailUploader/ThumbnailUploader";
import Button from "../../../components/common/Button/Button";
import api from "../../../api";
import { navigate } from "../../../libs/Codex";
import BottomTray from "../../../libs/Tray/BottomTray";
import BarButton from "../../../components/New/BarButton/BarButton";
import { openTray } from "../../../libs/Tray/useTray";
import { useMyAccountStore } from "../../../store/account/useMyAccountStore";
export default function NewWonderPage() {
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

  const myAccount = useMyAccountStore((state) => state.data);

  /**
   * TODO: Typesafe Setter 만들기
   */
  const setNewWonderValue = useCallback(
    (key: keyof NewWonder, value: any) =>
      setNewWonder({ ...newWonder, [key]: value }),
    [newWonder],
  );
  const formatTag = useCallback((value: string) => {
    const splits = value.split(" ");
    const mapped = splits.map((chunk, index) =>
      index !== splits.length - 1 && chunk[0] !== "#" && chunk.length > 0
        ? "#" + chunk
        : chunk,
    );
    return mapped;
  }, []);

  return (
    <main className={styles.NewWonderPage}>
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
          onChange={(e) => setNewWonderValue("tags", formatTag(e.target.value))}
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
        <BarButton
          title={"이벤트 일정"}
          interaction={{
            type: "click",
            onClick: () =>
              openTray(<div className={styles.empty}>가나다라마!!!</div>),
          }}
          isBold={false}
        />
        <BarButton
          title={"이벤트 장소"}
          interaction={{ type: "click", onClick: () => {} }}
          isBold={false}
        />
        <div className={styles.divider} />
        <BarButton
          title={"예약 / 예매"}
          interaction={{
            type: "toggle",
            onToggle: () => {},
          }}
          isBold={true}
        />
        <div className={styles.reservationDetail}>
          <BarButton
            title={"이름을 받을게요"}
            interaction={{
              type: "toggle",
              onToggle: () => {},
            }}
            isBold={false}
          />
          <BarButton
            title={"전화번호를 받을게요"}
            interaction={{
              type: "toggle",
              onToggle: () => {},
            }}
            isBold={false}
          />
          <BarButton
            title={"메일 주소를 받을게요"}
            interaction={{
              type: "toggle",
              onToggle: () => {},
            }}
            isBold={false}
          />
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
      <BottomTray />
    </main>
  );
}