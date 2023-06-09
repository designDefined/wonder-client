import styles from "./Creator.module.scss";
import { Maybe, maybe } from "../../../libs/Admon/maybe";
import { Wonder } from "../../../entity/wonder/wonder";
import Button from "../../common/Button/Button";

export default function Creator({
  creator,
}: {
  creator: Maybe<Wonder["creator"]>;
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
          <div className={styles.thumb} />
          <div className={styles.name}>{creator._value.name}</div>
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
