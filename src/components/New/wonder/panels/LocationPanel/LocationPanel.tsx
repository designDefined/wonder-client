import styles from "./LocationPanel.module.scss";
import Button from "../../../../common/Button/Button";
import { closeTray } from "../../../../../libs/Tray/useTray";
import { useEffect, useState } from "react";
import TextInput from "../../../../common/TextInput/TextInput";

type Props = {
  currentLocation: string;
  setCurrentLocation: (location: string) => void;
};

export default function LocationPanel({
  currentLocation,
  setCurrentLocation,
}: Props) {
  const [location, setLocation] = useState(currentLocation);

  useEffect(() => {
    setCurrentLocation(location);
  }, [location]);

  return (
    <div className={styles.LocationPanel}>
      <div className={styles.title}>선택한 곳의 장소명을 적어주세요.</div>
      <TextInput
        value={location}
        onChange={(e) => setLocation(e.target.value)}
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
  );
}
