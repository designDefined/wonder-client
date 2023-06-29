import styles from "./Cover.module.scss";
import { maybe, Maybe, MaybeJSON } from "../../../libs/Admon/maybe";
import { Wonder } from "../../../entity/wonder/wonder";

export default function Cover({
  data,
}: {
  data: Pick<Wonder, "title" | "summary" | "thumbnail">;
}) {
  return (
    <div className={styles.Cover}>
      <img
        className={styles.thumbnail}
        src={data.thumbnail?.src ?? ""}
        alt={data.thumbnail?.altText ?? ""}
      />
      <div className={styles.texts}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.summary}>{data.summary}</div>
      </div>
    </div>
  );
}
