import styles from "./LocationInput.module.scss";
import { useRef, useState } from "react";
import classNames from "classnames/bind";
import { closeTray, requestTrayResize } from "../../../libs/Tray/useTray";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { NewWonderInput } from "../../../pages/new/NewWonder/NewWonderPage";

const cx = classNames.bind(styles);

export default function LocationInput({
  data,
  setter,
}: {
  data: NewWonderInput["location"];
  setter: (data: Partial<NewWonderInput>) => void;
}) {
  const mapRef = useRef<HTMLImageElement>(null);
  const [stage, setStage] = useState<"location" | "name">("location");
  const [coords, setCoords] = useState(data?.coordinates ?? { x: 0, y: 0 });
  const [info, setInfo] = useState({
    name: data?.name ?? "",
    description: data?.description ?? "",
  });

  return (
    <div className={cx("LocationInput")}>
      {stage === "location" && (
        <div className={cx("location")}>
          <div
            className={styles.map}
            onClick={(e) => {
              if (!mapRef.current) return;
              const rect = mapRef.current.getBoundingClientRect();
              const x = e.clientX - rect.left; //x position within the element.
              const y = e.clientY - rect.top; //y position within the element.
              console.log(x, y);
              setCoords({ x, y });
            }}
          >
            <img
              ref={mapRef}
              className={styles.mapImage}
              src="/assets/sample/map_sample.png"
              onLoad={() => requestTrayResize()}
            />
            <img
              className={styles.marker}
              src={"/assets/icon/location_on.svg"}
              onLoad={() => requestTrayResize()}
              style={{ transform: `translate(${coords.x}px, ${coords.y}px)` }}
            />
          </div>
          <div className={cx("overlay")}>
            <div className={cx("textOverlay")}>
              이벤트가 진행될 장소를
              <br /> 핀으로 콕 찍어주세요.
            </div>
            <Button
              className={cx("buttonOverlay")}
              isFullWidth
              isMainColored
              isDisabled={coords.x === 0 && coords.y === 0}
              onClick={() => {
                setStage("name");
                requestTrayResize();
              }}
            >
              선택 완료!
            </Button>
          </div>
        </div>
      )}
      {stage === "name" && (
        <div className={cx("name")}>
          <div>선택한 곳의 장소명을 적어주세요.</div>
          <Input.Text
            title="장소명*"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
          <Input.Text
            title="설명"
            value={info.description}
            onChange={(e) => setInfo({ ...info, description: e.target.value })}
          />
          <Button
            isFullWidth
            isMainColored
            isDisabled={info.name === ""}
            onClick={() => {
              setter({
                location: {
                  name: info.name,
                  description: info.description,
                  coordinates: coords,
                },
              });
              closeTray();
            }}
          >
            작성 완료!
          </Button>
        </div>
      )}
    </div>
  );
}
