import styles from "./Creator.module.scss";
import { Maybe, maybe } from "../../../libs/Admon/maybe";
import { Wonder } from "../../../entity/wonder/wonder";
import Button from "../../common/Button/Button";
import { WonderView } from "../../../types/wonder/wonderView";

export default function Creator({
  creator,
}: {
  creator: Maybe<WonderView["creator"]>;
}) {
  return (
    <div className={styles.Creator}>
      {maybe.isNothing(creator) ? (
        <>
          <div className={styles.noThumb} />
          <div className={styles.noName} />
          <div className={styles.noSubscription} />
        </>
      ) : (
        <>
          <img
            className={styles.thumb}
            src={maybe.read(creator).profileImage.src}
          />
          <div className={styles.name}>{maybe.read(creator).name}</div>
          <Button
            label={"구독하기 +"}
            attribute={{ size: "small", theme: "gray" }}
            onClick={() => null}
            className={styles.subscription}
          />
        </>
      )}
    </div>
  );
}
