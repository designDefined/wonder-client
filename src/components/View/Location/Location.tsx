import { useEffect, useRef, useState } from "react";
import { Wonder } from "../../../entity/wonder";
import styles from "./Location.module.scss";

type Props = { location: Wonder["location"] };

export default function Location({ location }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [marked, setMarked] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (ref.current) {
      setMarked([
        ((location.coordinates.x - 500) / 10000) *
          (754 - ref.current.offsetWidth),
        ((location.coordinates.y + 420) / 10000) * (1400 - 205),
      ]);
    }
  }, [ref]);
  return (
    <div className={styles.Location}>
      <h3 className={styles.label}>이벤트 장소</h3>
      <div className={styles.map} ref={ref}>
        <img
          className={styles.mapImage}
          src="/assets/sample/map_sample.png"
          style={{ top: `-${marked[1]}px`, left: `-${marked[0]}px` }}
        />
        <img
          className={styles.marker}
          src={"/assets/icon/location_on.svg"}
          //style={{ top: `-${marked[1]}px`, left: `-${marked[0]}px` }}
        />
      </div>
    </div>
  );
}
