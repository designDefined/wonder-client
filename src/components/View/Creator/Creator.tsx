import styles from "./Creator.module.scss";

import Button from "../../common/Button/Button";
import { WonderDetail } from "../../../types/wonder/wonderDetail";

export default function Creator({
  creator,
}: {
  creator: WonderDetail["creator"];
}) {
  return (
    <div className={styles.Creator}>
      <img className={styles.thumb} src={creator.profileImage.src} />
      <div className={styles.name}>{creator.name}</div>
      <Button
        label={"구독하기 +"}
        attribute={{ size: "small", theme: "gray" }}
        onClick={() => null}
        className={styles.subscription}
      />
    </div>
  );
}
