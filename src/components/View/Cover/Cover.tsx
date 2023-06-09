import styles from "./Cover.module.scss";
import { maybe, Maybe, MaybeJSON } from "../../../libs/Admon/maybe";
import { Wonder } from "../../../entity/wonder/wonder";

export default function Cover({
  data,
}: {
  data: MaybeJSON<Pick<Wonder, "title" | "summary" | "thumbnail">>;
}) {
  const thumbnailData = maybe.safeRead(data.thumbnail, {
    altText: "",
    src: "",
  });
  return (
    <div className={styles.Cover}>
      {maybe.isNothing(data.thumbnail) ? (
        <div className={styles.noThumbnail} />
      ) : (
        <img
          className={styles.thumbnail}
          src={thumbnailData?.src}
          alt={thumbnailData?.altText}
        />
      )}
      <div className={styles.texts}>
        <div className={styles.title}>{maybe.safeRead(data.title, "")}</div>
        <div className={styles.summary}>{maybe.safeRead(data.summary, "")}</div>
      </div>
    </div>
  );
}
