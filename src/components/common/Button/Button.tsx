import styles from "./Button.module.scss";
import { MouseEventHandler } from "react";

export default function Button({
  label,
  attribute,
  onClick,
  className,
}: {
  label: string;
  attribute: { size: "big" | "small"; theme: "default" | "gray" | "white" };
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) {
  return (
    <button
      className={`${styles.Button} ${styles[attribute.size]} ${
        styles[attribute.theme]
      } ${className ?? ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
