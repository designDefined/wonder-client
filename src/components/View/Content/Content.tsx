import styles from "./Content.module.scss";
import { Wonder } from "../../../entity/wonder";

export default function Content({ content }: { content: Wonder["content"] }) {
  return <div className={styles.Content}>{content}</div>;
}
