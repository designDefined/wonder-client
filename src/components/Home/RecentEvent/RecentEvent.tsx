import styles from "./RecentEvent.module.scss";
import api from "../../../api";

import { navigate } from "../../../libs/Codex";
import useFetch from "../../../libs/ReactAssistant/useFetch";
import { WonderCard } from "../../../types/wonder/wonderCardDisplay";

export default function RecentEvent() {
  const [cards] = useFetch<WonderCard[]>(() => api.get("/wonder/recent"), []);

  if (!cards) return <div className={styles.noEvent} />;

  return (
    <div className={styles.RecentEvent}>
      <h2 className={styles.title}>최근 올라온 이벤트</h2>
      <ul className={styles.eventList}>
        {cards.map(({ id, title, creator, thumbnail }) => (
          <li
            key={id}
            className={styles.event}
            onClick={() => {
              navigate(`view/${id}`, "slideNext");
            }}
          >
            <img className={styles.thumbnail} src={thumbnail?.src ?? ""} />
            <div className={styles.eventCreator}>
              <img className={styles.thumb} src={creator.profileImage.src} />
              <div className={styles.name}>{creator.name}</div>
            </div>
            <div className={styles.eventTitle}>{title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
