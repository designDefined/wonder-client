import styles from "./Content.module.scss";
import { maybe, Maybe } from "../../../libs/Admon/maybe";
import { Wonder } from "../../../entity/wonder/wonder";

export default function Content({ content }: { content: Wonder["content"] }) {
  return <div className={styles.Content}>{content}</div>;
}
