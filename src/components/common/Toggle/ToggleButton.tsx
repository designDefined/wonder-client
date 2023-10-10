import styles from "./ToggleButton.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);

type Props = {
  value: boolean;
  onToggle: (value: boolean) => void;
  className?: string;
};

export default function ToggleButton({ value, onToggle, className }: Props) {
  return (
    <button
      className={cx(
        "ToggleButton",
        { isOn: value },
        { [className ? className : "none"]: className },
      )}
      onClick={() => {
        onToggle(!value);
      }}
    >
      <div className={cx("circle")} />
    </button>
  );
}
