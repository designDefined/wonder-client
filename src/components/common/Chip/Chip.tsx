import styles from "./Chip.module.scss";
import { MouseEventHandler } from "react";

export default function Chip({
  label,
  attribute,
  onClick,
  className,
}: {
  label: string;
  attribute: { theme: "default" | "gray" };
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) {
  return (
    <button
      className={`${styles.Chip} ${styles[attribute.theme]} ${className ?? ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
