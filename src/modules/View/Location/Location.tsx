import { useRef } from "react";
import { Wonder } from "../../../entity/wonder";
import styles from "./Location.module.scss";

type Props = { location: Wonder["location"] };

export default function Location({ location }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.Location}>
      <h3 className={styles.label}>이벤트 장소</h3>
      <div className={styles.map} ref={ref}>
        <img
          className={styles.mapImage}
          src="/assets/sample/map_sample.png"
          style={{
            transform: `translate(${-location.coordinates.x}px, ${-location
              .coordinates.y}px)`,
          }}
        />
        <div className={styles.label}>{location.name}</div>
        <img className={styles.marker} src={"/assets/icon/location_on.svg"} />
      </div>
    </div>
  );
}
