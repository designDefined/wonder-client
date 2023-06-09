import styles from "./Content.module.scss";
import { maybe, Maybe } from "../../../libs/Admon/maybe";
import { Wonder } from "../../../entity/wonder/wonder";

export default function Content({
  content,
}: {
  content: Maybe<Wonder["content"]>;
}) {
  return maybe.isNothing(content) ? (
    <div className={styles.noContent} />
  ) : (
    <div className={styles.Content}>{maybe.read(content)}</div>
  );
}
