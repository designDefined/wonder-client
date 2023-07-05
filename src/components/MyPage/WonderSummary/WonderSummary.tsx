import { navigate } from "../../../libs/Codex";
import {
  WonderSummaryReservation,
  WonderSummaryTitleOnly,
} from "../../../types/wonder/WonderSummary";
import styles from "./WonderSummary.module.scss";

type SimpleProps = {
  wonder: WonderSummaryTitleOnly;
};

export function WonderSummarySimple({
  wonder: { id, title, thumbnail },
}: SimpleProps) {
  return (
    <div
      className={styles.WonderSummarySimple}
      onClick={() => navigate(`/view/${id}`, "slideNext")}
    >
      <img
        className={styles.thumbnail}
        src={thumbnail.src}
        alt={thumbnail.altText}
      />
      <div className={styles.title}>{title}</div>
    </div>
  );
}

type ReservedProps = {
  wonder: WonderSummaryReservation;
};

export function WonderSummaryReserved({
  wonder: { id, title, thumbnail, reservedTime, location },
}: ReservedProps) {
  return (
    <div
      className={styles.WonderSummaryReserved}
      onClick={() => navigate(`/view/${id}`, "slideNext")}
    >
      <img
        className={styles.thumbnail}
        src={thumbnail.src}
        alt={thumbnail.altText}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.location}>{location.name}</div>
      <div className={styles.time}>
        <div className={styles.date}>{reservedTime.date}</div>
        <div className={styles.time}>{reservedTime.time}</div>
      </div>
    </div>
  );
}
