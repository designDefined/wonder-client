import styles from "./TextInput.module.scss";
import { ChangeEventHandler } from "react";

type TextInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  title?: string;
  placeHolder?: string;
  className?: string;
  error?: string;
};

export default function TextInput({
  value,
  onChange,
  title,
  placeHolder,
  className,
  error,
}: TextInputProps) {
  return (
    <div className={styles.TextInput}>
      <div className={styles.title}>{title ?? ""}</div>
      <input
        type="text"
        className={`${styles.input} ${className ?? "noAdditionalClass"}`}
        value={value}
        onChange={onChange}
        placeholder={placeHolder ?? ""}
      />
      <div className={styles.error}>{error ?? ""}</div>
    </div>
  );
}
