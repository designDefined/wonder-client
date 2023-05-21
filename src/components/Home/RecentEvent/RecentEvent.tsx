import styles from "./RecentEvent.module.scss";
import sample from "../../../assets/sample/poster_sample.png";

export default function RecentEvent() {
  return (
    <div className={styles.RecentEvent}>
      <h2 className={styles.title}>최근 올라온 이벤트</h2>
      <ul className={styles.eventList}>
        <li className={styles.event}>
          <img className={styles.thumbnail} src={sample} />
          <div className={styles.eventCreator}>정보문화학</div>
          <div className={styles.eventTitle}>new_ISC = ITCT(“20th”)</div>
        </li>
        <li className={styles.event}>
          <img className={styles.thumbnail} src={sample} />
          <div className={styles.eventCreator}>정보문화학</div>
          <div className={styles.eventTitle}>new_ISC = ITCT(“20th”)</div>
        </li>
        <li className={styles.event}>
          <img className={styles.thumbnail} src={sample} />
          <div className={styles.eventCreator}>정보문화학</div>
          <div className={styles.eventTitle}>new_ISC = ITCT(“20th”)</div>
        </li>
        <li className={styles.event}>
          <img className={styles.thumbnail} src={sample} />
          <div className={styles.eventCreator}>정보문화학</div>
          <div className={styles.eventTitle}>new_ISC = ITCT(“20th”)</div>
        </li>
      </ul>
    </div>
  );
}
