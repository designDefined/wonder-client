import styles from "./CodexWrapper.module.scss";
import classNames from "classnames/bind";
import { useCodex } from "../../index";

export function CodexWrapperA() {
  const status = useCodex((state) => state.status);
  const transitionType = useCodex((state) => state.transitionType);
  const currentSide = useCodex((state) => state.currentSide);
  const targetComponent = useCodex((state) => state.componentA);
  const stabilize = useCodex((state) => state.stabilize);

  return (
    <div
      className={`${styles["CodexWrapper"]} ${styles[status]} ${
        styles[transitionType ?? "noTransition"]
      } ${currentSide === "A" ? styles["main"] : styles["sub"]}`}
      onAnimationEnd={() => {
        stabilize();
      }}
    >
      {targetComponent ? targetComponent : <div>none</div>}
    </div>
  );
}
export function CodexWrapperB() {
  const status = useCodex((state) => state.status);
  const transitionType = useCodex((state) => state.transitionType);
  const currentSide = useCodex((state) => state.currentSide);
  const targetComponent = useCodex((state) => state.componentB);
  const stabilize = useCodex((state) => state.stabilize);

  return (
    <div
      className={`${styles["CodexWrapper"]} ${styles[status]} ${
        styles[transitionType ?? "noTransition"]
      } ${currentSide === "B" ? styles["main"] : styles["sub"]}`}
      onAnimationEnd={() => {
        stabilize();
      }}
    >
      {targetComponent ? targetComponent : <div>none</div>}
    </div>
  );
}
