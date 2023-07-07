import styles from "./LocationPanel.module.scss";
import Button from "../../../../common/Button/Button";
import { closeTray, requestTrayResize } from "../../../../../libs/Tray/useTray";
import { useEffect, useRef, useState } from "react";
import TextInput from "../../../../common/TextInput/TextInput";
import { NewWonder } from "../../../../../types/wonder/newWonder";

type Props = {
  currentLocation: NewWonder["location"];
  setCurrentLocation: (location: NewWonder["location"]) => void;
};

export default function LocationPanel({
  currentLocation,
  setCurrentLocation,
}: Props) {
  const [stage, setStage] = useState<"location" | "name">("location");
  const [location, setLocation] =
    useState<NewWonder["location"]>(currentLocation);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const target = ref.current as HTMLDivElement;
      target.scrollLeft = (location.x / 10000) * (954 - target.offsetWidth);
      target.scrollTop = (location.y / 10000) * (1800 - target.offsetHeight);
    }
  }, [ref]);

  return (
    <div className={styles.LocationPanel}>
      {stage === "location" && (
        <>
          <div className={styles.container}>
            <div
              className={styles.map}
              ref={ref}
              onScroll={(e) => {
                const target = e.target as HTMLDivElement;
                setLocation({
                  ...location,
                  x: Math.floor(
                    (target.scrollLeft / (954 - target.offsetWidth)) * 10000,
                  ),
                  y: Math.floor(
                    (target.scrollTop / (1800 - target.offsetHeight)) * 10000,
                  ),
                });
              }}
            >
              <img src="/assets/sample/map_sample.png" />
            </div>
            <div className={styles.overlay}>
              <Button
                label={"선택 완료!"}
                attribute={{ theme: "default", size: "big" }}
                onClick={() => {
                  setStage("name");
                  requestTrayResize();
                }}
              />
              <div className={styles.description}>
                이벤트가 진행될 장소를 <br />
                핀으로 콕 찍어주세요.
              </div>
            </div>
            <div className={styles.marker}></div>
          </div>
        </>
      )}
      {stage === "name" && (
        <>
          <div className={styles.name}>
            <div className={styles.title}>선택한 곳의 장소명을 적어주세요.</div>
            <TextInput
              value={location.name}
              onChange={(e) =>
                setLocation({ ...location, name: e.target.value })
              }
              placeholder={"예) 64동 IBK 커뮤니케이션 센터 302호"}
            />
            <Button
              label={"장소 입력 완료!"}
              attribute={{ theme: "default", size: "big" }}
              onClick={() => {
                setCurrentLocation(location);
                closeTray();
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
