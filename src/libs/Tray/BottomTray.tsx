import styles from "./BottomTray.module.scss";
import { useTray } from "./useTray";
import classNames from "classnames/bind";
import { useEffect, useReducer } from "react";

const cx = classNames.bind(styles);

export default function BottomTray() {
  const target = useTray((state) => state.target);
  const isHandle = useTray((state) => state.isHandle);

  return (
    <div className={cx("BottomTray", { empty: target === null })}>
      {isHandle && <div className={cx("handle")} />}
      {target}
    </div>
  );
}
