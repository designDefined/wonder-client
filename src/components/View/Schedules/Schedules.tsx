import styles from "./Schedules.module.scss";
import { Wonder, WonderSchedule } from "../../../entity/wonder/wonder";
import { maybe, Maybe } from "../../../libs/Admon/maybe";

function ScheduleCard({
  schedule: { date, time },
}: {
  schedule: WonderSchedule;
}) {
  const [y, m, d] = date;
  return (
    <li className={styles.scheduleCard}>
      <div className={styles.date}>{`${y}. ${m}. ${d}`}</div>
      {time.map(([h, min], index) => (
        <div className={styles.time} key={index}>{`${h}:${String(min).padStart(
          2,
          "0",
        )}`}</div>
      ))}
    </li>
  );
}

export default function Schedules({
  schedules,
}: {
  schedules: Maybe<Wonder["schedule"]>;
}) {
  return (
    <div className={styles.Schedules}>
      <h3 className={styles.label}>이벤트 일시</h3>
      <ul className={styles.scheduleContainer}>
        {maybe.isNothing(schedules)
          ? [0, 1, 2].map(() => <div className={styles.noCard} />)
          : maybe
              .read(schedules)
              .map((schedule, index) => (
                <ScheduleCard key={index} schedule={schedule} />
              ))}
      </ul>
    </div>
  );
}
