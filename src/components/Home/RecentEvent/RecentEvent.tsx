import styles from "./RecentEvent.module.scss";
import { WonderCard } from "../../../entity/wonder/card";

type Props = { eventData: WonderCard[] };

export default function RecentEvent({ eventData }: Props) {
  return (
    <div className={styles.RecentEvent}>
      <h2 className={styles.title}>최근 올라온 이벤트</h2>
      <ul className={styles.eventList}>
        {eventData.map(({ id, title, creator, thumbnail }) => (
          <li className={styles.event} key={id}>
            <img className={styles.thumbnail} src={thumbnail} />
            <div className={styles.eventCreator}>{creator}</div>
            <div className={styles.eventTitle}>{title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
