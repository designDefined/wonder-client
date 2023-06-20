import styles from "./ToggleButton.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);

type Props = {
  onToggle: (value: boolean) => void;
  defaultValue?: boolean;
  className?: string;
};

export default function ToggleButton({
  onToggle,
  defaultValue,
  className,
}: Props) {
  const [isOn, setIsOn] = useState<boolean>(
    defaultValue ? defaultValue : false,
  );
  return (
    <button
      className={cx(
        "ToggleButton",
        { isOn },
        { [className ? className : "none"]: className },
      )}
      onClick={() => {
        onToggle(!isOn);
        setIsOn(!isOn);
      }}
    >
      <div className={cx("circle")} />
    </button>
  );
}
