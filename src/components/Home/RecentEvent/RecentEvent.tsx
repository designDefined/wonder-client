import styles from "./RecentEvent.module.scss";
import api from "../../../api";
import { WonderCardDisplay } from "../../../types/wonder/wonderCardDisplay";
import { navigate } from "../../../libs/Codex";
import { useFetches } from "../../../libs/Admon";

export default function RecentEvent() {
  const cards = useFetches<WonderCardDisplay, any>(api.get("/wonderCard"));

  return (
    <div className={styles.RecentEvent}>
      <h2 className={styles.title}>최근 올라온 이벤트</h2>
      <ul className={styles.eventList}>
        {cards.map(
          ({ id, title, creator, thumbnail }) => (
            <li
              className={styles.event}
              key={id}
              onClick={() => {
                navigate(`wonder/${id}`);
              }}
            >
              <img className={styles.thumbnail} src={thumbnail?.src ?? ""} />
              <div className={styles.eventCreator}>{creator.name}</div>
              <div className={styles.eventTitle}>{title}</div>
            </li>
          ),
          <div className={styles.noEvent} />,
        )}
      </ul>
    </div>
  );
}
