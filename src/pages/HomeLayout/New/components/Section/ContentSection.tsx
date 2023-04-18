import styles from "./Section.module.scss";
import TextInputWithLabel from "../WithLabel/TextInputWithLabel";
import TextAreaWithLabel from "../WithLabel/TextAreaWithLabel";
import {
  updateNewWonderStore,
  useNewWonderStore,
} from "../../../../../store/new/useNewWonderStore";

export default function ContentSection() {
  const title = useNewWonderStore((state) => state.title);
  const tags = useNewWonderStore((state) => state.tags);
  const summary = useNewWonderStore((state) => state.summary);

  return (
    <section className={styles.ContentSection}>
      <TextInputWithLabel
        label="이벤트 제목"
        value={title}
        onChange={(e) => updateNewWonderStore("title", e.target.value)}
        placeHolder="30자 이내. 예) 2023년 2학기 정보문화학 과제전"
      />
      <TextInputWithLabel
        label="이벤트 태그"
        value={tags.toString()}
        onChange={() => {}}
        placeHolder="예) 연극, 뮤지컬, 일일호프, 연주회, 전시"
      />
      <TextInputWithLabel
        label="이벤트 한 줄 요약"
        value={summary}
        onChange={(e) => updateNewWonderStore("summary", e.target.value)}
        placeHolder="이벤트를 요약하는 내용을 작성해주세요."
      />
      <TextAreaWithLabel label="행사 내용" />
      <div className={styles.divider} />
    </section>
  );
}
