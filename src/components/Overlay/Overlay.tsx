import styles from "./Overlay.module.scss";
import { useEffect } from "react";
import { useCodex } from "../../libs/Codex";
import { useOverlay } from "../../store/overlay/useOverlay";
export default function Overlay() {
  const overlays = useOverlay((state) => state.overlays);
  const { clear, setOverlay } = useOverlay((state) => state.actions);
  const side = useCodex((state) => state.currentSide);

  useEffect(() => {
    clear();
  }, [side]);

  return (
    <div
      className={`${styles.Overlay} ${overlays.length > 0 && styles.active}`}
      onMouseDown={(e) => {
        setOverlay(
          overlays.filter(
            (overlay) => overlay.config.closeWhenBlurred === false,
          ),
        );
      }}
    >
      {overlays.map((overlay) => overlay.target)}
    </div>
  );
}
