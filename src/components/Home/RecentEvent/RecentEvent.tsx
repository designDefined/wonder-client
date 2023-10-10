import styles from "./RecentEvent.module.scss";
import api from "../../../api";

import { navigate } from "../../../libs/Codex";
import useFetch from "../../../libs/ReactAssistant/useFetch";
import { WonderCard } from "../../../types/wonder/wonderCardDisplay";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

export default function RecentEvent() {
  const [cards] = useFetch<WonderCard[]>(() => api.get("/wonder/recent"), []);

  return (
    <div className={styles.RecentEvent}>
      <div className={styles.title}>
        <SectionTitle
          title="최근 올라온 이벤트"
          attribute={{ size: "medium" }}
          onClick={() => navigate("/wonders", "slideNext")}
        />
      </div>
      <ul className={styles.eventList}>
        {cards === null ? (
          <>
            <div className={styles.noEvent} />
            <div className={styles.noEvent} />
            <div className={styles.noEvent} />
          </>
        ) : (
          cards.map(({ id, title, thumbnail }) => (
            <li
              key={id}
              className={styles.event}
              onClick={() => {
                navigate(`view/${id}`, "slideNext");
              }}
            >
              <img className={styles.thumbnail} src={thumbnail?.src ?? ""} />
              <div className={styles.content}>
                <div className={styles.eventCreator}>
                  <img className={styles.thumb} src={""} />
                  <div className={styles.name}></div>
                </div>
                <div className={styles.eventTitle}>{title}</div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
