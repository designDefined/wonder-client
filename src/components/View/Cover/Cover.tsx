import styles from "./Cover.module.scss";
import { WonderDetail } from "../../../types/wonder/wonderDetail";

export default function Cover({
  data,
  onLike,
}: {
  data: Pick<WonderDetail, "title" | "summary" | "thumbnail" | "liked">;
  onLike: () => void;
}) {
  return (
    <div className={styles.Cover}>
      <img
        className={styles.thumbnail}
        src={data.thumbnail?.src ?? ""}
        alt={data.thumbnail?.altText ?? ""}
      />
      <button className={styles.like} onClick={onLike}>
        <img
          src={
            data.liked
              ? "/assets/icon/favorite/filled.svg"
              : "/assets/icon/favorite/default.svg"
          }
        />
      </button>
      <div className={styles.texts}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.summary}>{data.summary}</div>
      </div>
    </div>
  );
}
