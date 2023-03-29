import styles from "./TextInput.module.scss";
import { ChangeEventHandler } from "react";

type TextInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeHolder?: string;
  additionalClassName?: string;
};

export default function TextInput({
  value,
  onChange,
  placeHolder,
  additionalClassName,
}: TextInputProps) {
  return (
    <input
      type="text"
      className={`${styles.TextInput} ${
        additionalClassName ?? "noAdditionalClass"
      }`}
      value={value}
      onChange={onChange}
      placeholder={placeHolder ?? ""}
    />
  );
}
