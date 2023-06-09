import styles from "./Location.module.scss";

export default function Location() {
  return (
    <div className={styles.Location}>
      <h3 className={styles.label}>이벤트 장소</h3>
      <div className={styles.map}></div>
    </div>
  );
}
