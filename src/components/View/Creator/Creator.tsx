import styles from "./Creator.module.scss";
import { Maybe, maybe } from "../../../libs/Admon/maybe";
import { Wonder } from "../../../entity/wonder/wonder";
import Button from "../../common/Button/Button";
import { WonderView } from "../../../types/wonder/wonderView";

export default function Creator({
  creator,
}: {
  creator: WonderView["creator"];
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
