import classNames from "classnames/bind";
import { range } from "ramda";
import styles from "./Progress.module.scss";

const cx = classNames.bind(styles);

type ProgressProps = {
  steps: number;
  currentStep: number;
  className?: string;
};

function Progress({ steps, currentStep, className }: ProgressProps) {
  return (
    <div className={cx("Progress", className)}>
      <div className={cx("container", `amount-${steps}`)}>
        <div className={cx("line")} />
        {range(1, steps + 1).map((step) => {
          if (step < currentStep)
            return (
              <div key={step} className={cx("step", "passed")}>
                <img src={"/assets/icon/progress/check.svg"} />
              </div>
            );
          if (step === currentStep)
            return (
              <div key={step} className={cx("step", "current")}>
                {step}
              </div>
            );
          if (step > currentStep)
            return (
              <div key={step} className={cx("step", "left")}>
                {step}
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default Progress;
